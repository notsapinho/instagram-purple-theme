// ==UserScript==
// @name         Instagram Purple Theme
// @homepageURL  https://github.com/notsapinho/instagram-purple-theme
// @namespace    http://tampermonkey.net/
// @downloadURL  https://raw.githubusercontent.com/notsapinho/instagram-purple-theme/raw/main/theme.user.js
// @updateURL    https://raw.githubusercontent.com/notsapinho/instagram-purple-theme/main/theme.meta.js
// @version      0.0.1
// @description  Adds a theme to instagram.
// @author       notsapinho
// @match        https://www.instagram.com/*
// @grant        GM_addStyle
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @run-at       document-start
// ==/UserScript==

const $ = window.jQuery;
//teste
$(document).ready(async () => {
    GM_addStyle(`
       body {
    background: rgb(41, 40, 65) !important;
}

svg {
    fill: rgb(255, 255, 255) !important;
}

/* red heart color */

svg[fill="#ed4956"] {
    fill: rgb(237, 73, 86) !important;
}

/* from black to white */

.-cx-PRIVATE-NavBar__logo__,
.s4Iyt,
.felixSpriteProfileChannelNullState,
.coreSpriteSaveNull,
.coreSpriteTaggedNull,
.coreSpriteLoggedOutWordmark,
.coreSpriteKeyhole,
.glyphsSpriteDirect__outline__24__grey_9,
.glyphsSpriteFacebook_circle__outline__24__grey_9,
.glyphsSpriteApp_instagram__outline__24__grey_9,
.glyphsSpriteApp_messenger__outline__24__grey_9,
.glyphsSpriteApp_twitter__outline__24__grey_9,
.glyphsSpriteApp_whatsapp__outline__24__grey_9,
.glyphsSpriteMail__outline__24__grey_9,
.glyphsSpriteLink__outline__24__grey_9,
.glyphsSpriteLocation__outline__24__grey_9,
.glyphsSpriteCall__outline__24__grey_9,
.glyphsSpriteFacebook_circle__outline__24__grey_9,
.glyphsSpriteFriend_Follow,
.coreSpriteDropdownArrowGrey9,
.glyphsSpriteCamera__outline__24__grey_9,
.glyphsSpriteLock__outline__24__grey_9,
.glyphsSpriteDirect__outline__96,
.glyphsSpriteCircle_add__outline__24__grey_9 {
    filter: brightness(0) invert(1);
    -webkit-filter: brightness(0) invert(1);
}

/* from white to black
.className {
    filter: grayscale(1) invert(1);
    -webkit-filter: grayscale(1) invert(1);
}*/

/* Specific classes */

/* Wrapper inverting colors */

.instagram-dark-wrapper img {
    filter: invert(100%);
}

/* Removing color of "Log in with Facebook" on Login page */

.KPnG0 {
    color: inherit !important;
}

/* Removing the forgotten shadow by Instagram in Profile menu */

.TOh1s {
    display: none;
}

/* Color of link from links of hashtags, profiles */

.-cx-PRIVATE-ErrorPage__errorContainer__,
.BAJFR input,
.BAJFR textarea,
.xJ4T9,
.Ouy_P,
.t3CGe,
._7kTyW {
    color: #fff !important;
}

/* Bacground color of sound icon */

._6Rvw2.IhCmn.Igw0E.IwRSH.eGOV_._4EzTm.ItkAi {
   background-color: #fff !important;
}

.IhCmn {
    background-color: #262626 !important;
}

.lXJWB {
    background-color: #292841 !important;
}

.-cx-PRIVATE-NavBar__root__ {
   background-color: var(--background-tertiary) !important;
}

.-cx-PRIVATE-NavBar__username__,
.-cx-PRIVATE-ErrorPage__errorContainer__ a, .-cx-PRIVATE-ErrorPage__errorContainer__ a:visited {
   color: rgb(0,149,246) !important;
}

/* VARS */
:root {
    /* Black */
    --b3f: var(--background-primary) !important;
    --d87: var(--background-tertiary) !important;
    --f23: var(--background-secondary) !important;
    /* White */
    --i1d: 255, 255, 255 !important;
    --f75: 255, 255, 255 !important;
    /* Grey */
    --ce3: var(--background-accent) !important;
    --b38: var(--background-accent) !important;
    --b6a: var(--background-accent) !important;
    --ca6: var(--background-accent) !important;
    --bb2: var(--background-accent) !important;
    /* Others */
    --fe0: 88, 86, 140 !important;

    --background-primary: 41, 40, 65;
    --background-secondary: 36, 35, 56;
    --background-secondary-alt: #3c3a5e;
    --background-tertiary: 28, 27, 41;
    --background-accent: 65, 63, 102;
    --background-floating: #15141e;
}

    `);
});
