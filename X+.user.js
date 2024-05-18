// ==UserScript==
// @name      X+
// @namespace X+
// @match     *://twitter.com/*
// @match     *://x.com/*
// @run-at    document-start
// @require   https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js
// @require   https://cdn.jsdelivr.net/npm/dayjs@1/plugin/relativeTime.js
// @grant     none
// ==/UserScript==
var e=[],t=[];!function(n,r){if(n&&"undefined"!=typeof document){var i,o=!0===r.prepend?"prepend":"append",l=!0===r.singleTag,a="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(l){var p=e.indexOf(a);-1===p&&(p=e.push(a)-1,t[p]={}),i=t[p]&&t[p][o]?t[p][o]:t[p][o]=s()}else i=s();65279===n.charCodeAt(0)&&(n=n.substring(1)),i.styleSheet?i.styleSheet.cssText+=n:i.appendChild(document.createTextNode(n))}function s(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var i="prepend"===o?"afterbegin":"beforeend";return a.insertAdjacentElement(i,e),e}}("#xp-ui-root{backdrop-filter:blur(6px);color:#fff;display:flex;height:100%;position:fixed;top:0;width:100%}#xp-ui-body{display:flex;flex-direction:column;min-width:600px}#xp-ui-bar,#xp-ui-body{background-color:#000;border-left:1px solid var(--xp-accent);border-radius:16px;border-right:1px solid var(--xp-accent);margin:16px;padding:8px}#xp-ui-bar{display:flex;flex-direction:column;width:fit-content}#xp-ui-bar button,.xp-button{background-color:#000;border:1px solid var(--xp-accent);border-radius:8px;padding:6px 12px}#xp-ui-bar button:hover,.xp-button:hover{background-color:#222}#xp-ui-bar button+button{margin-top:4px}#xp-ui-filters-textarea{border-radius:16px;box-sizing:border-box;height:100%;margin-top:8px;padding:8px;resize:none;white-space:nowrap;width:100%}:root{--xp-accent:#1d9bf0}.xp-userinfo-container{display:flex;flex-wrap:wrap;width:fit-content}.xp-userinfo-child{background-color:#202327;border-radius:4px;font-family:TwitterChirp;font-size:11px;margin-left:4px;padding:2px 4px;text-decoration:none}",{});const n=["%cX+","padding: 0px 2px"];class r{static{this.log=console.log.bind(window,...n)}static{this.warn=console.warn.bind(window,...n)}}var i="webpackChunk_twitter_responsive_web";class o{static{this.listeners=new Set}static init(){!function(){let e=Object.defineProperty;Object.defineProperty=function(t,n,r){return(r.get||r.set)&&(r.configurable=!0),e.call(this,t,n,r)}}(),Object.defineProperty(window,i,{set(e){delete window[i],window[i]=e,Object.defineProperty(e,"push",{get:()=>Array.prototype.push,set:t=>{e.webpackPush=t,Object.defineProperty(e,"push",{value:l.bind(this,e)}),e.push([["X+"],{},e=>o.loader=e])}})}})}static get(e){return new Promise((t=>{let n=(r,i)=>{e(r,i)&&(t(i),o.listeners.delete(n))};o.listeners.add(n)}))}static getID(e){let t=o.loader?.c[e];return t?Promise.resolve(t):o.get((t=>e==t))}}function l(e,t){const[,n]=t;for(const e in n){const t=n[e];n[e]=(...n)=>{let[,r,i]=n;try{t.apply(null,n);for(let t of[...o.listeners])t(e,r)}catch(e){console.error(e)}finally{i.m[e]=t}},n[e].toString=()=>t.toString()}return e.webpackPush(t)}let a,p,s,c=new Promise((e=>p=e)),d=new Promise((e=>s=e));let u=g(localStorage.getItem("xp-filters")||""),f=[["Filters",function(){let[e,t]=a.useState((()=>localStorage.getItem("xp-filters")||m));return a.createElement(a.Fragment,null,a.createElement("button",{className:"xp-button",onClick:function(){localStorage.setItem("xp-filters",e),u=g(e)}},"Save and apply"),a.createElement("textarea",{id:"xp-ui-filters-textarea",spellcheck:!1,value:e,onChange:e=>t(e.target.value)}))}]];function h(e){let[t,n]=a.useState(-1);const r=f[t]?.[1];return a.createElement(a.Fragment,null,a.createElement("div",{id:"xp-ui-bar"},a.createElement("button",{style:{marginBottom:"8px"},onClick:e.hide},"Hide"),f.map((([e],t)=>a.createElement("button",{onClick:()=>n(t)},e)))),-1==t?null:a.createElement("div",{id:"xp-ui-body"},a.createElement(r,null)))}const m="# Start a line with a hashtag to have it ignored as a comment\n# Press `Recompile` when all changes are done to apply them\n# Each line contains one regex statement with an optional comment\n# The comment following a regex is its name, shown on filtered posts\n# Optionally prefix a filter to only apply to [b]ios or [u]sernames.\n# The filtered field is shown and does not need to be in the filter name\n#\n# Example of a regex to filter out everyone with an empty bio:\n# b/^$/ # Empty";function g(e){return e.split("\n").map((e=>e.trim())).filter((e=>!e.startsWith("#"))).map((e=>"/"!=e.charAt(0)?[e.charAt(0),e.substring(1)]:["",e])).map((([e,t])=>[e,t.split("#")[0].trim(),t.split("#").slice(1).join("#").trim()])).map((([e,t,n])=>{let i;try{i=new RegExp(t.substring(t.indexOf("/")+1,t.lastIndexOf("/")),t.substring(t.lastIndexOf("/")+1))}catch(e){alert("Exception occurred while compiling regex, it has been skipped:\n"+e),r.warn(e)}return[e,i,n]})).filter((([,e])=>e))}let b;function x(e,t,n,i,o){let l;for(let t=0;t<(i||1/0)&&e?.return&&!(l=n(e));t++)e=e.return;return l||void(o||r.warn(`Failed to find \`${t}\` in tree`))}var y=Object.freeze({__proto__:null,postFiltering:function(){o.get(((e,t)=>t?.ZP?.toString?.()?.includes?.("freedom_of_speech_not_reach"))).then((e=>{let t=e.ZP.prototype.render;e.ZP.prototype.render=function(){return this.filterChecked||(this.filterChecked=!0,this.filterReason=function(e){if(e.user.following||e.user.followed_by)return;for(let[t,n,r]of u){if(("n"==t||""==t)&&-1!=e.user.name.search(n))return`Name (${r||"Unspecified"})`;if(("b"==t||""==t)&&-1!=e.user.description.search(n))return`Bio (${r||"Unspecified"})`}return null}(this.props.tweet)),this.filterReason?a.createElement("div",{style:{color:"#b8babd",marginLeft:"4px",fontFamily:"TwitterChirp",fontSize:"15px",alignSelf:"center"},onClick:()=>(delete this.filterReason,this.forceUpdate())},`Filtered: ${this.filterReason}`):t.apply(this,arguments)}}))},postPlatform:function(){o.get(((e,t)=>t?.Z?.toString?.()?.includes?.("_getUserScreenNameNode"))).then((e=>{let t=e.Z.prototype.render;e.Z.prototype.render=function(){let e=t.apply(this,arguments),n=x(this._reactInternals,"tweet",(e=>e.stateNode?.props?.tweet));if(!n)return e;let r=n.source_name.replace(/Twitter for/,"").replace(/Twitter Web App/,"Web").replace(/Twitter Web Client/,"Web Client").replace(/TweetDeck Web App/,"TweetDeck"),i=e.props.children.props.children.props.children[1].props;return i.children=a.Children.toArray(i.children),i.children.push(a.createElement("a",{style:{color:"#b8babd",marginLeft:"4px",fontFamily:"TwitterChirp",fontSize:"15px",lineHeight:"20px",verticalAlign:"middle",textDecoration:"none",minWidth:"content-fit",flex:"1"},href:n.source_url},r||"Unknown")),e}}))},relativeAccountAge:function(){window.dayjs.extend(window.dayjs_plugin_relativeTime),o.get(((e,t)=>t?.Z?.type?.toString?.()?.includes?.("joinDate"))).then((e=>{let t=e.Z.type;e.Z.type=function(){let e=t.apply(this,arguments);return e?.props?.children&&(e.props.children+=` (${window.dayjs(arguments[0].joinDate).fromNow()})`),e}}))},timezone:function(){o.get(((e,t)=>t?.Z?.toString?.()?.includes?.("amountOfTime"))).then((e=>{let t=e.Z.prototype.render;e.Z.prototype.render=function(){let e=t.apply(this,arguments);return e.props.children[1].props.onClick=()=>{let e=prompt("Enter observed time in hours:");if(!e)return;let t=(parseInt(e)-new Date(this.props.timestamp).getUTCHours())%24;t<-12&&(t+=24),t>14&&(t-=24),alert(0==t?"UTC":t>0?`UTC+${t}`:`UTC${t}`)},e}}))},userInfo:function(){o.get(((e,t)=>t?.Z?.prototype?.render?.toString?.()?.includes?.("_useUserHoverCardWrapper"))).then((e=>{let t=e.Z.prototype.render;function n(e,t,n,r,i,o){let l=Math.abs(r)||0;return n&&1!=l&&(t+="s"),a.createElement(e,{className:"xp-userinfo-child",style:{color:r<i?"#FFF":"#71767B"},...o||{}},`${l} ${t}`)}e.Z.prototype.render=function(){let e=t.apply(this,arguments),r=x(this._reactInternals,"user",(e=>e.pendingProps.user),25,!0);if(!r)return e;let i=[n("span","like",!0,r.favourites_count,100),n("span","post",!0,r.statuses_count,10),n("span","media",!1,r.media_count,5),n("a","list",!0,-(r.listed_count||0),0,{href:`${document.location.origin}/${r.screen_name}/lists/memberships`})];return e.props.children.props.children.push(a.createElement("div",{className:"xp-userinfo-container"},i)),e}}))}});r.log("Initialized"),o.init(),o.get(((e,t)=>"object"==typeof t&&"createElement"in t&&"cloneElement"in t)).then((e=>p(a=e))),o.get(((e,t)=>"object"==typeof t&&"createRoot"in t)).then((e=>s(e))),function(){let e;o.get(((e,t)=>t?.ZP?.toString()?.includes("showHasNewItemsIndicator"))).then((t=>{e=t.ZP})),o.get(((e,t)=>t?.ZP?.toString()?.includes("wideMode"))).then((t=>{let n=t.ZP;Object.defineProperty(t,"ZP",{value:function(){let t=n.apply(this,arguments);return e?(t.props.children.props.children.push(a.createElement(e,{"aria-label":"Open X+ Menu",label:"Open Menu",layout:"vertical",rank:99,onClick(e){e.preventDefault(),b.style.display=""},renderIcon:()=>a.createElement("div",{style:{width:"24px",height:"24px",fontSize:"24px",fontFamily:"TwitterChirp",lineHeight:"24px"}},"X+"),withLabel:t.props.children.props.children[0].props.withLabel})),t):t}})})),Promise.all([c,d]).then((([e,t])=>{b=document.createElement("div"),b.id="xp-ui-root",b.style.display="none",document.body.appendChild(b),t.createRoot(b).render(e.createElement(h,{hide:()=>b.style.display="none"})),document.addEventListener("keydown",(e=>{"Escape"==e.key&&"none"!=b.style.display&&(e.preventDefault(),e.stopPropagation(),b.style.display="none")}))}))}();for(let e of Object.values(y))e();window.xp={get loader(){return o.loader}},setTimeout((()=>{document.getElementById("placeholder")&&location.reload()}),1e3);
