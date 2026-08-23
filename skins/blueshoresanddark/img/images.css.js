/*
 * SPDX-License-Identifier: AGPL-3.0-or-later (Copyright (C) 2026 Gianluca Zamagni, Parvati Srl)
 * blueshore: replace the legacy colored-icon composites (generated file,
 * edit tools/gen-icons.py). Deletes every core AjxImgData Overlay/Mask
 * entry (client falls back to the flat class icons in icons.css), then
 * re-adds masks built from the same flat shapes: colored organizers
 * render as color-tinted flat icons, tags as plain colored dots.
 */
if (!window.AjxImgData) AjxImgData = {};
(function() {
	for (var k in AjxImgData) {
		if (/(Overlay|Mask)$/.test(k)) { delete AjxImgData[k]; }
	}
	var CLEAR = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27%3E%3C/svg%3E#";
	var DOT = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27%3E%3Cpath fill=%27white%27 fill-rule=%27evenodd%27 d=%27M0 0h16v16H0z M12.5 8a4.5 4.5 0 1 1-9 0a4.5 4.5 0 1 1 9 0Z%27/%3E%3C/svg%3E#";
	AjxImgData.ImgTagMask = {t:0, l:0, w:16, h:16, f:DOT};
	AjxImgData.ImgTagOverlay = {t:0, l:0, w:16, h:16, f:CLEAR};
	AjxImgData.ImgTagStackMask = {t:0, l:0, w:16, h:16, f:DOT};
	AjxImgData.ImgTagStackOverlay = {t:0, l:0, w:16, h:16, f:CLEAR};
	AjxImgData.ImgFolderMask = {t:0, l:0, w:16, h:16, f:"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27%3E%3Cdefs%3E%3Cmask id=%27m%27%3E%3Crect width=%2724%27 height=%2724%27 fill=%27white%27/%3E%3Cg fill=%27none%27 stroke=%27black%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%22M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z%22 /%3E%3C/g%3E%3C/mask%3E%3C/defs%3E%3Crect width=%2724%27 height=%2724%27 fill=%27white%27 mask=%27url(%23m)%27/%3E%3C/svg%3E#"};
	AjxImgData.ImgFolderOverlay = {t:0, l:0, w:16, h:16, f:CLEAR};
	AjxImgData.ImgSharedMailFolderMask = {t:0, l:0, w:16, h:16, f:"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27%3E%3Cdefs%3E%3Cmask id=%27m%27%3E%3Crect width=%2724%27 height=%2724%27 fill=%27white%27/%3E%3Cg fill=%27none%27 stroke=%27black%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%22M2 9.35V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7%22 /%3E %3Cpath d=%22m8 16 3-3-3-3%22 /%3E%3C/g%3E%3C/mask%3E%3C/defs%3E%3Crect width=%2724%27 height=%2724%27 fill=%27white%27 mask=%27url(%23m)%27/%3E%3C/svg%3E#"};
	AjxImgData.ImgSharedMailFolderOverlay = {t:0, l:0, w:16, h:16, f:CLEAR};
	AjxImgData.ImgSearchFolderMask = {t:0, l:0, w:16, h:16, f:"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27%3E%3Cdefs%3E%3Cmask id=%27m%27%3E%3Crect width=%2724%27 height=%2724%27 fill=%27white%27/%3E%3Cg fill=%27none%27 stroke=%27black%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%22M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1%22 /%3E %3Cpath d=%22m21 21-1.9-1.9%22 /%3E %3Ccircle cx=%2217%22 cy=%2217%22 r=%223%22 /%3E%3C/g%3E%3C/mask%3E%3C/defs%3E%3Crect width=%2724%27 height=%2724%27 fill=%27white%27 mask=%27url(%23m)%27/%3E%3C/svg%3E#"};
	AjxImgData.ImgSearchFolderOverlay = {t:0, l:0, w:16, h:16, f:CLEAR};
	AjxImgData.ImgInboxMask = {t:0, l:0, w:16, h:16, f:"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27%3E%3Cdefs%3E%3Cmask id=%27m%27%3E%3Crect width=%2724%27 height=%2724%27 fill=%27white%27/%3E%3Cg fill=%27none%27 stroke=%27black%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2222 12 16 12 14 15 10 15 8 12 2 12%22 /%3E %3Cpath d=%22M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z%22 /%3E%3C/g%3E%3C/mask%3E%3C/defs%3E%3Crect width=%2724%27 height=%2724%27 fill=%27white%27 mask=%27url(%23m)%27/%3E%3C/svg%3E#"};
	AjxImgData.ImgInboxOverlay = {t:0, l:0, w:16, h:16, f:CLEAR};
	AjxImgData.ImgCalendarFolderMask = {t:0, l:0, w:16, h:16, f:"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27%3E%3Cdefs%3E%3Cmask id=%27m%27%3E%3Crect width=%2724%27 height=%2724%27 fill=%27white%27/%3E%3Cg fill=%27none%27 stroke=%27black%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%22M8 2v3%22 /%3E %3Cpath d=%22M16 2v3%22 /%3E %3Crect x=%223%22 y=%223%22 width=%2218%22 height=%2218%22 rx=%222%22 /%3E %3Cpath d=%22M3 9h18%22 /%3E%3C/g%3E%3C/mask%3E%3C/defs%3E%3Crect width=%2724%27 height=%2724%27 fill=%27white%27 mask=%27url(%23m)%27/%3E%3C/svg%3E#"};
	AjxImgData.ImgCalendarFolderOverlay = {t:0, l:0, w:16, h:16, f:CLEAR};
	AjxImgData.ImgTaskListMask = {t:0, l:0, w:16, h:16, f:"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27%3E%3Cdefs%3E%3Cmask id=%27m%27%3E%3Crect width=%2724%27 height=%2724%27 fill=%27white%27/%3E%3Cg fill=%27none%27 stroke=%27black%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%22M13 5h8%22 /%3E %3Cpath d=%22M13 12h8%22 /%3E %3Cpath d=%22M13 19h8%22 /%3E %3Cpath d=%22m3 17 2 2 4-4%22 /%3E %3Crect x=%223%22 y=%224%22 width=%226%22 height=%226%22 rx=%221%22 /%3E%3C/g%3E%3C/mask%3E%3C/defs%3E%3Crect width=%2724%27 height=%2724%27 fill=%27white%27 mask=%27url(%23m)%27/%3E%3C/svg%3E#"};
	AjxImgData.ImgTaskListOverlay = {t:0, l:0, w:16, h:16, f:CLEAR};
	AjxImgData.ImgContactsFolderMask = {t:0, l:0, w:16, h:16, f:"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27%3E%3Cdefs%3E%3Cmask id=%27m%27%3E%3Crect width=%2724%27 height=%2724%27 fill=%27white%27/%3E%3Cg fill=%27none%27 stroke=%27black%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%22M15 13a3 3 0 1 0-6 0 %22 /%3E %3Cpath d=%22M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20 %22 /%3E %3Ccircle cx=%2212%22 cy=%228%22 r=%222%22 /%3E%3C/g%3E%3C/mask%3E%3C/defs%3E%3Crect width=%2724%27 height=%2724%27 fill=%27white%27 mask=%27url(%23m)%27/%3E%3C/svg%3E#"};
	AjxImgData.ImgContactsFolderOverlay = {t:0, l:0, w:16, h:16, f:CLEAR};
	AjxImgData.ImgEmailedContactsMask = {t:0, l:0, w:16, h:16, f:"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27%3E%3Cdefs%3E%3Cmask id=%27m%27%3E%3Crect width=%2724%27 height=%2724%27 fill=%27white%27/%3E%3Cg fill=%27none%27 stroke=%27black%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%22M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2%22 /%3E %3Cpath d=%22M16 3.128a4 4 0 0 1 0 7.744%22 /%3E %3Cpath d=%22M22 21v-2a4 4 0 0 0-3-3.87%22 /%3E %3Ccircle cx=%229%22 cy=%227%22 r=%224%22 /%3E%3C/g%3E%3C/mask%3E%3C/defs%3E%3Crect width=%2724%27 height=%2724%27 fill=%27white%27 mask=%27url(%23m)%27/%3E%3C/svg%3E#"};
	AjxImgData.ImgEmailedContactsOverlay = {t:0, l:0, w:16, h:16, f:CLEAR};
	AjxImgData.ImgBriefcaseMask = {t:0, l:0, w:16, h:16, f:"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27%3E%3Cdefs%3E%3Cmask id=%27m%27%3E%3Crect width=%2724%27 height=%2724%27 fill=%27white%27/%3E%3Cg fill=%27none%27 stroke=%27black%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%22M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16%22 /%3E %3Crect width=%2220 %22 height=%2214%22 x=%222%22 y=%226%22 rx=%222%22 /%3E%3C/g%3E%3C/mask%3E%3C/defs%3E%3Crect width=%2724%27 height=%2724%27 fill=%27white%27 mask=%27url(%23m)%27/%3E%3C/svg%3E#"};
	AjxImgData.ImgBriefcaseOverlay = {t:0, l:0, w:16, h:16, f:CLEAR};
})();
window.BlueshoreImgSwap = {
	"/img/large/ImgPerson_48.png": "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2248%22 height=%2248%22 viewBox=%220 0 24 24%22%3E%3Ccircle cx=%2212%22 cy=%2212%22 r=%2212%22 fill=%22%233a3323%22/%3E%3Cg fill=%22none%22 stroke=%22%23f0a53a%22 stroke-width=%221.4%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Ccircle cx=%2212%22 cy=%229.5%22 r=%223.6%22/%3E%3Cpath d=%22M5 20.2a8 8 0 0 1 14 0 %22/%3E%3C/g%3E%3C/svg%3E#",
	"/img/large/ImgPerson_32.png": "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2232%22 height=%2232%22 viewBox=%220 0 24 24%22%3E%3Ccircle cx=%2212%22 cy=%2212%22 r=%2212%22 fill=%22%233a3323%22/%3E%3Cg fill=%22none%22 stroke=%22%23f0a53a%22 stroke-width=%221.4%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Ccircle cx=%2212%22 cy=%229.5%22 r=%223.6%22/%3E%3Cpath d=%22M5 20.2a8 8 0 0 1 14 0 %22/%3E%3C/g%3E%3C/svg%3E#"
};
window.BlueshoreColorValues = {
	"blue": "#3b6fd4",
	"cyan": "#2f8fc4",
	"gray": "#9aa0a8",
	"green": "#3f9d63",
	"orange": "#d98a1f",
	"pink": "#d4699e",
	"purple": "#7b46c7",
	"red": "#c7563f",
	"yellow": "#d5a018"
};
