# Installing Blueshore

All commands run on the Zimbra mailbox server. `SKIN` stands for the variant
you are installing: `blueshoretide`, `blueshoretidedark`, `blueshoresand` or
`blueshoresanddark`. Repeat the steps for every variant you want to offer.

Paths below are the defaults of a Zimbra 10 installation
(`/opt/zimbra/jetty_base/webapps/zimbra/skins`).

## 1. Get the skin

Prebuilt skins are attached to every release on
<https://github.com/eagle1maledetto/blueshore/releases>: one tarball per
variant, `<SKIN>-<version>.tar.gz`, which unpacks to a `<SKIN>/` directory.

```sh
VER=1.0.0
SKIN=blueshoretide
curl -fLO https://github.com/eagle1maledetto/blueshore/releases/download/v$VER/$SKIN-$VER.tar.gz
```

Alternatively build from a source checkout (`python3 tools/build.py --all`,
see *How to build* in the [README](README.md)): the result is the same
directory, under `skins/$SKIN`.

## 2. Copy the skin into place (as root)

Zimbra 10 hardens the webapp directories: they are read-only for the `zimbra`
user, so `zmskindeploy` cannot copy a skin from `/tmp` by itself. Put the
directory in place as root first, then hand it to `zimbra`:

```sh
tar -xzf $SKIN-$VER.tar.gz -C /opt/zimbra/jetty_base/webapps/zimbra/skins/
# from a source checkout: cp -a skins/$SKIN /opt/zimbra/jetty_base/webapps/zimbra/skins/
chown -R zimbra:zimbra /opt/zimbra/jetty_base/webapps/zimbra/skins/$SKIN
```

## 3. Register the skin (as zimbra)

`zmskindeploy` run on the directory that is already in place only registers
the skin (`zimbraInstalledSkin`) and flushes the cache:

```sh
su - zimbra
zmskindeploy /opt/zimbra/jetty_base/webapps/zimbra/skins/$SKIN
zmprov fc skin
```

## 4. Offer it to users

Add the skin to the list of available themes of a class of service
(the `+` keeps the existing ones):

```sh
zmprov mc default +zimbraAvailableSkin $SKIN
zmprov fc skin
```

Users then find it in *Preferences → General → Theme*. To make it the default
for new sessions of that COS:

```sh
zmprov mc default zimbraPrefSkin $SKIN
```

Per-account enabling is possible with `zmprov ma user@example.com
+zimbraAvailableSkin $SKIN`, but note that an account-level value **replaces**
the COS list instead of adding to it: list every skin that account should see
in the same command (`zmprov ma user@example.com zimbraAvailableSkin a
zimbraAvailableSkin b ...`).

## 5. Verify

The aggregated stylesheet can be checked without logging in:

```sh
curl -sk "https://mail.example.com/css/skin.css?skin=$SKIN" | wc -c
```

About 180 KB and containing `Public Sans` means the skin is served. About
24 KB means Zimbra fell back to the default skin: the registration has not
been picked up yet. Restart the web client once:

```sh
su - zimbra -c 'zmmailboxdctl restart'
```

and check again. Then log in, open *Preferences → General → Theme* and pick
the skin.

Skin names must be plain ASCII letters and digits: the CSS servlet strips any
other character from the `skin` parameter before resolving it, and a name
such as `blue-shore` silently becomes `blueshore`, which does not exist, so the
default skin is served with no error in the logs. The names shipped here are
safe; keep the rule if you make your own variant.

## Updating

Copy the new files over the installed directory and flush. No restart is
needed, also for changes to `manifest.xml`:

```sh
tar -xzf $SKIN-$VER.tar.gz -C /opt/zimbra/jetty_base/webapps/zimbra/skins/
# from a source checkout: cp -a skins/$SKIN/. /opt/zimbra/jetty_base/webapps/zimbra/skins/$SKIN/
chown -R zimbra:zimbra /opt/zimbra/jetty_base/webapps/zimbra/skins/$SKIN
su - zimbra -c 'zmprov fc skin'
```

Browsers cache the aggregated CSS for 30 days and the cache key is the Zimbra
build version, which does not change when skin files do. Users who still see
the old look need a hard reload (Ctrl+F5 / Cmd+Shift+R) or a new browser
session.

## Removing

```sh
rm -rf /opt/zimbra/jetty_base/webapps/zimbra/skins/$SKIN
su - zimbra -c "zmprov mcf -zimbraInstalledSkin $SKIN; zmprov mc default -zimbraAvailableSkin $SKIN; zmprov fc skin"
```

Accounts whose `zimbraPrefSkin` still points to the removed skin fall back to
the default skin on next login.

## Domain theme colours

Zimbra lets a domain force four theme colours (`zimbraSkinBackgroundColor`,
`zimbraSkinForegroundColor`, `zimbraSkinSecondaryColor`,
`zimbraSkinSelectionColor`). When set, the CSS servlet substitutes them into
every skin, Blueshore included, and the palette is lost (surfaces take the
domain background colour). Check and clear them:

```sh
zmprov gd example.com zimbraSkinBackgroundColor zimbraSkinForegroundColor zimbraSkinSecondaryColor zimbraSkinSelectionColor
zmprov md example.com zimbraSkinBackgroundColor '' zimbraSkinForegroundColor '' zimbraSkinSecondaryColor '' zimbraSkinSelectionColor ''
zmprov fc skin
```

## Logo

Blueshore does not ship a logo: it shows whatever the domain is configured
for, exactly like the stock skins. The banner in the top-left corner and the
link it points to are domain attributes:

```sh
zmprov md example.com zimbraSkinLogoAppBanner https://example.com/logo.png zimbraSkinLogoURL https://example.com
```

The same image is used by every skin of the domain, light and dark alike.
The logo licensing rules of Zimbra (see the note at the top of
`skin.properties`) apply as with any other skin.

## Troubleshooting

- **White page after login for accounts on the skin.** `img/images.css.js` is
  missing from the skin directory: the shell JSP needs it. Unpack or copy
  the whole `<SKIN>` directory again.
- **Empty folder tree, no errors in the console.** An image used by the
  coloured-icon compositing failed to load; copy the directory again and
  flush.
- **The CSS endpoint returns HTTP 500.** The server-side CSS generator
  rejects some modern selectors; this cannot happen with the shipped files,
  but if you edit `skin.css` test the endpoint after every change.
- **Theme shows the right name but looks like the default skin.** See
  "Verify" above (registration not picked up) or "Domain theme colours".
