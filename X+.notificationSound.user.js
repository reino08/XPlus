// ==UserScript==
// @name        X+ Notfication Sound
// @namespace   X+
// @match       *://twitter.com/*
// @match       *://x.com/*
// @run-at      document-start
// @homepageURL https://github.com/reino08/XPlus
// @downloadURL https://reino08.github.io/XPlus/X+.userlists.user.js
// @grant       GM.xmlHttpRequest
// @grant       unsafeWindow
// ==/UserScript==
const e=document.createElement("audio");var t;GM.xmlHttpRequest({url:"https://raw.githubusercontent.com/reino08/XPlus/refs/heads/master/assets/notification.mp3",responseType:"blob"}).then((t=>e.src=URL.createObjectURL(t.response))),t=async t=>{t.externs.extern_APIBadgeCount.then((o=>t.Patch.patchHalves(o,"Z",void 0,((o,s,c)=>{t.Patch.patchHalves(c,"fetchBadgeCount",void 0,((t,o,s)=>{s.then((t=>{(t.dm_unread_count>n||t.ntab_unread_count>a)&&e.play(),n=t.dm_unread_count,a=t.ntab_unread_count}))}))}))))},(unsafeWindow[Symbol.for("X+ Addons 0")]||=[]).push(t);let n=0,a=0;
