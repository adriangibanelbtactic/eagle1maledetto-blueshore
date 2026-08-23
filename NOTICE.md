# Licensing overview

Blueshore is a derivative work of the `harmony` skin distributed with the
Zimbra Collaboration Suite Web Client (Copyright (C) 2013-2016 Synacor, Inc.).
Different parts of this repository are under different licences; every file
derived from Zimbra keeps its original licence header.

## Original Blueshore code: AGPL-3.0-or-later

The following files are original to this project, Copyright (C) 2026
Gianluca Zamagni, Parvati Srl, and are released under the **GNU Affero
General Public License, version 3 or (at your option) any later version** —
full text in [LICENSE](LICENSE):

- `src/blueshore/blueshore.js` and its copies under `skins/*/`
- `src/blueshore/img/images.css` and the generated `skins/*/img/images.css.js`
- the generated `skins/*/icons.css`
- `palettes/*.properties`
- `tools/build.py`, `tools/gen-icons.py`, `tools/skinprops.py`
- the documentation (`README.md`, `INSTALL.md`, `docs/`)

What this means in practice: you can use, modify and deploy Blueshore freely,
including in commercial and hosted services. If you **modify** these files
and let users interact with the result over a network (a hosted webmail, a
SaaS), you must offer those users the corresponding source of your modified
version under the same licence (AGPL section 13). Unmodified use carries no
such obligation.

## Files derived from Zimbra

- `src/blueshore/manifest.xml`, `src/blueshore/skin.css` and their copies
  under `skins/*/` are subject to the **Common Public Attribution License
  Version 1.0** (CPAL 1.0), as stated in their headers. CPAL already contains
  a network-use clause (section 14, "External Deployment"): modified versions
  deployed over a network must be made available in source form under CPAL.
  A copy of the licence is available at <https://www.zimbra.com/license>.
- `src/blueshore/skin.properties` and its copies under `skins/*/` are subject
  to the **GNU General Public License, version 2**, as stated in their header.
  A copy of the licence is available at
  <https://www.gnu.org/licenses/gpl-2.0.html>.

The Zimbra logo licensing rules described at the top of `skin.properties`
apply unchanged: Blueshore ships no logo and shows the one configured for the
domain.

## Third-party assets

- Icons: [Lucide](https://lucide.dev), ISC License. The vendored SVG subset is
  in `tools/lucide/`, the licence text in `src/blueshore/LICENSE-Lucide.txt`
  (copied into every built skin).
- Typeface: [Public Sans](https://public-sans.digital.gov/), SIL Open Font
  License 1.1. Font files and licence in `src/blueshore/fonts/` (copied into
  every built skin).
