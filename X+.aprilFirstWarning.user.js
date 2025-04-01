// ==UserScript==
// @name        X+ April 1st Warning
// @namespace   X+
// @match       *://twitter.com/*
// @match       *://x.com/*
// @run-at      document-start
// @homepageURL https://github.com/reino08/XPlus
// @downloadURL https://reino08.github.io/XPlus/X+.aprilFirstWarning.user.js
// @grant       unsafeWindow
// ==/UserScript==
var e=[],t=[];var r;!function(r,a){if(r&&"undefined"!=typeof document){var n,s=!0===a.prepend?"prepend":"append",o=!0===a.singleTag,p="string"==typeof a.container?document.querySelector(a.container):document.getElementsByTagName("head")[0];if(o){var i=e.indexOf(p);-1===i&&(i=e.push(p)-1,t[i]={}),n=t[i]&&t[i][s]?t[i][s]:t[i][s]=d()}else n=d();65279===r.charCodeAt(0)&&(r=r.substring(1)),n.styleSheet?n.styleSheet.cssText+=r:n.appendChild(document.createTextNode(r))}function d(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),a.attributes)for(var t=Object.keys(a.attributes),r=0;r<t.length;r++)e.setAttribute(t[r],a.attributes[t[r]]);var n="prepend"===s?"afterbegin":"beforeend";return p.insertAdjacentElement(n,e),e}}("article:has(.xp-april-first){border:1px solid #ff0}.xp-quoted-post+:has(.xp-april-first-quote)>*{border:1px solid #ff0}.xp-quoted-post+:not(:has(.xp-april-first-quote))>*{background-color:#000}",{}),r=async e=>{e.patches.TweetUserPatch.then((t=>t.subscribe(t.post,((t,r,a)=>{let n=t.props.tweet?.retweeted_status?.created_at||t.props.tweet?.created_at,s=new Date(n).toUTCString(),o=new Date(s+"+1400"),p=new Date(s+"-1200"),i=3==o.getMonth()&&1==o.getDate()||3==p.getMonth()&&1==p.getDate()?e.React.createElement("span",{className:"xp-tag xp-april-first"+(t.props.id?"":"-quote")}):null;a.props.children=[i,...e.React.Children.toArray(a.props.children)]}),-200)))},(unsafeWindow[Symbol.for("X+ Addons 0")]||=[]).push(r);
