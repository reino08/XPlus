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
const t=document.createElement("audio");var e,n;GM.xmlHttpRequest({url:"https://raw.githubusercontent.com/reino08/XPlus/refs/heads/master/assets/notification.mp3",responseType:"blob"}).then((e=>t.src=URL.createObjectURL(e.response))),e="Notification Sound",n=async e=>{e.externs.extern_APIBadgeCount.then((n=>e.Patch.patchHalves(n,"Z",void 0,((n,c,s)=>{e.Patch.patchHalves(s,"fetchBadgeCount",void 0,((n,c,s)=>{s.then((n=>{if(n.dm_unread_count>a||n.ntab_unread_count>o)try{t.play()}catch{e.Logger.warn("Failed to play notification sound (inactive)")}a=n.dm_unread_count,o=n.ntab_unread_count}))}))}))))},(unsafeWindow[Symbol.for("X+ Addons 1")]||=[]).push([n,e]);let a=0,o=0;
