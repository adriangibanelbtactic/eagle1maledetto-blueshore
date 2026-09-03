# Licensing overview

Blueshore is a derivative work of the `harmony` skin distributed with the
Zimbra Collaboration Suite Web Client (Copyright (C) 2013-2016 Synacor, Inc.).
Different parts of this repository are under different licences; every file
derived from Zimbra keeps its original licence header, and no file under one
licence incorporates code from a file under another (see "How the licences
fit together" at the end).

| Files | Licence |
|---|---|
| `manifest.xml`, `skin.css` (from Zimbra) | CPAL 1.0 |
| `skin.properties` (from Zimbra) | GPL-2.0-only |
| `blueshore.js`, `img/images.css`, `tools/*.py`, generated `icons.css` and `img/images.css.js`, documentation | AGPL-3.0-or-later |
| `palettes/*.properties` | GPL-2.0-or-later |
| Lucide icons (`tools/lucide/`, inlined in `icons.css`) | ISC (icons inherited from Feather: MIT) |
| Public Sans (`fonts/`) | SIL OFL 1.1 |

## Original Blueshore code: AGPL-3.0-or-later

The following files are original to this project, Copyright (C) 2026
Gianluca Zamagni, Parvati Srl, and are released under the **GNU Affero
General Public License, version 3 or (at your option) any later version** —
full text in [LICENSE](LICENSE):

- `src/blueshore/blueshore.js` and its copies under `skins/*/`
- `src/blueshore/img/images.css` and the generated `skins/*/img/images.css.js`
- the generated `skins/*/icons.css`
- `tools/build.py`, `tools/gen-icons.py`, `tools/skinprops.py`
- the documentation (`README.md`, `INSTALL.md`, `docs/`)

What this means in practice: you can use, modify and deploy Blueshore freely,
including in commercial and hosted services. If you **modify** these files
and let users interact with the result over a network (a hosted webmail, a
SaaS), you must offer those users the corresponding source of your modified
version under the same licence (AGPL section 13). Unmodified use carries no
such obligation.

## Palettes: GPL-2.0-or-later

`palettes/*.properties`, Copyright (C) 2026 Gianluca Zamagni, Parvati Srl,
are released under the **GNU General Public License, version 2 or (at your
option) any later version**. The build merges their values into the copy of
Zimbra's `skin.properties`, which is GPL-2.0-only: colour values are not
copyrightable expression, but licensing the palettes this way keeps the
merged file consistent under any reading, while remaining compatible with
the AGPL-3.0-or-later code (GPLv3 section 13). A palette you write for your
own variant can be under any licence you like.

## Files derived from Zimbra

- `src/blueshore/manifest.xml`, `src/blueshore/skin.css` and their copies
  under `skins/*/` are subject to the **Common Public Attribution License
  Version 1.0** (CPAL 1.0), as stated in their headers. CPAL already contains
  a network-use clause (section 14, "External Deployment"): modified versions
  deployed over a network must be made available in source form under CPAL.
  Zimbra states the licence of its web client at
  <https://www.zimbra.com/product/licenses-and-terms-of-use/>; the licence
  text is at <https://opensource.org/license/cpal-1-0>.
- `src/blueshore/skin.properties` and its copies under `skins/*/` are subject
  to the **GNU General Public License, version 2**, as stated in their header.
  A copy of the licence is available at
  <https://www.gnu.org/licenses/gpl-2.0.html>.

### Modifications to the Zimbra files

As required by CPAL (MPL 1.1 section 3.3) and GPLv2 (section 2(a)), the
changes made to the files above, all by Gianluca Zamagni, Parvati Srl, in
August 2026 (first published 2026-08-23; later changes are in the git
history of each file):

- `manifest.xml`: the file list adapted to Blueshore (`icons.css` and
  `blueshore.js` added; the `_base/base3` includes kept).
- `skin.properties`: harmony's colour and layout tokens replaced by the
  Blueshore design tokens; Zimbra's core settings and the logo licensing
  rules kept.
- `skin.css`: harmony's rules replaced by the Blueshore layout and component
  styles (token references only, no colour literals), plus the Public Sans
  `@font-face` declarations.

Each of these files carries a modification notice right after the original
licence block.

### Zimbra attribution

CPAL section 14 lets the original developer require the display of its
attribution; for Zimbra this is the logo shown in the web client. Blueshore
does not change the form of that attribution: `LogoImgDir` still points to
Zimbra's `_base/logos`, `AppBannerImg` picks the monochrome Zimbra logo
there (black or white, as the stock skins do) and the skin ships no logo of
its own, so the client shows the Zimbra logo unless the domain overrides it
through Zimbra's own
`zimbraSkinLogo*` attributes, exactly as with the stock skins. The logo
licensing rules at the top of `skin.properties` therefore apply unchanged;
they bind whoever deploys the software, not the skin.

## Third-party assets

- Icons: [Lucide](https://lucide.dev), ISC License; the icons Lucide
  inherited from Feather are MIT. The vendored SVG subset is in
  `tools/lucide/`; both notices are in `src/blueshore/LICENSE-Lucide.txt`,
  copied into every built skin. The icons are inlined as data URIs in the
  generated `icons.css`.
- Typeface: [Public Sans](https://public-sans.digital.gov/), SIL Open Font
  License 1.1 (the GSA modifications to Libre Franklin are additionally
  CC0). The four `woff2` files in `src/blueshore/fonts/` are the unmodified
  upstream files, no Reserved Font Name is declared, and the licence text is
  shipped next to them (copied into every built skin).

## How the licences fit together

A Zimbra skin is a set of independent files that the Zimbra server loads by
name from `manifest.xml`: none of them is compiled or linked with another,
and in Blueshore no file under one licence contains code taken from a file
under another. The build (`tools/build.py`) only copies files and
substitutes colour values. This is the same per-file scheme Zimbra applies
to its own skins, where a CPAL `skin.css` sits next to a GPLv2
`skin.properties`.

Every licence involved allows distributing such a set as one package:

- CPAL 1.0 (MPL 1.1 section 3.7, "Larger Works"): Covered Code may be
  combined with code under other licences and distributed as a single
  product, provided the CPAL files stay under CPAL. They do.
- GPLv2 (section 2, last paragraph) and AGPLv3 (section 5, "aggregates"):
  distributing a covered file together with independent works on the same
  medium does not extend the licence to those works. The known
  incompatibility between GPL-2.0-only and (A)GPLv3 concerns code combined
  into a single program, which does not happen here: `skin.properties` is a
  token file read by the server, `blueshore.js` runs in the browser, and
  neither includes or derives from the other.
- ISC, MIT and OFL are permissive and only require the notices that are
  shipped.

This overview is written in good faith by the author and is not legal advice.
