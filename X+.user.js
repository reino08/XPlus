// ==UserScript==
// @name        X+
// @namespace   X+
// @match       *://twitter.com/*
// @match       *://x.com/*
// @run-at      document-start
// @require     https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js
// @require     https://cdn.jsdelivr.net/npm/dayjs@1/plugin/relativeTime.js
// @homepageURL https://github.com/reino08/XPlus
// @downloadURL https://reino08.github.io/XPlus/X+.user.js
// @grant       GM.getValue
// @grant       GM.setValue
// @grant       unsafeWindow
// ==/UserScript==
var e=[],t=[];!function(r,n){if(r&&"undefined"!=typeof document){var i,o=!0===n.prepend?"prepend":"append",l=!0===n.singleTag,a="string"==typeof n.container?document.querySelector(n.container):document.getElementsByTagName("head")[0];if(l){var p=e.indexOf(a);-1===p&&(p=e.push(a)-1,t[p]={}),i=t[p]&&t[p][o]?t[p][o]:t[p][o]=s()}else i=s();65279===r.charCodeAt(0)&&(r=r.substring(1)),i.styleSheet?i.styleSheet.cssText+=r:i.appendChild(document.createTextNode(r))}function s(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),n.attributes)for(var t=Object.keys(n.attributes),r=0;r<t.length;r++)e.setAttribute(t[r],n.attributes[t[r]]);var i="prepend"===o?"afterbegin":"beforeend";return a.insertAdjacentElement(i,e),e}}("#xp-ui-root{backdrop-filter:blur(6px);color:#fff;display:flex;height:100%;position:fixed;top:0;width:100%}#xp-ui-body{display:flex;flex-direction:column;width:600px}#xp-ui-bar,#xp-ui-body{background-color:#000;border-left:1px solid var(--xp-accent);border-radius:16px;border-right:1px solid var(--xp-accent);margin:16px;padding:8px}#xp-ui-bar{display:flex;flex-direction:column;width:fit-content}#xp-ui-bar>button,.xp-button{background-color:#000;border:1px solid var(--xp-accent);border-radius:8px;padding:6px 12px}#xp-ui-bar>button:hover,.xp-button:hover{background-color:#222}#xp-ui-bar>button+button{margin-top:4px}#xp-ui-filters-textarea{border-radius:16px;box-sizing:border-box;height:100%;margin-top:8px;padding:8px;resize:none;white-space:nowrap;width:100%}#xp-ui-follow-list{align-self:flex-start;display:flex;flex-wrap:wrap}#xp-ui-follow-list>a{background-color:#111;border-radius:4px;color:#fff;font-family:TwitterChirp;font-size:16px;margin:2px;padding:2px 4px;text-align:center;text-decoration:none}:root{--xp-accent:#1d9bf0}.xp-userinfo-container{display:flex;flex-wrap:wrap;width:fit-content}.xp-userinfo-child{background-color:#202327;border-radius:4px;font-family:TwitterChirp;font-size:11px;margin-left:4px;padding:2px 4px;text-decoration:none}",{});var r="webpackChunk_twitter_responsive_web";const n=["%cX+","padding: 0px 2px"];class i{static{this.log=console.log.bind(window,...n)}static{this.warn=console.warn.bind(window,...n)}}class o{static{this.listeners=new Set}static get(e){return new Promise((t=>{let r=(n,i)=>{e(n,i)&&(t(n),o.listeners.delete(r))};o.listeners.add(r)}))}static getID(e){let t=o.loader?.c[e];return t?Promise.resolve(t):o.get((t=>e==t))}static getString(e,t){let r=r=>{const n=t(r);return n?.toString==String.toString&&n.toString().includes(e)};if(o.loader?.c){let t=Object.values(o.loader?.c).map((e=>e.exports)).filter(r);return 1!=t.length?(i.warn(`${t.length} results from string search: "${e}"`),Promise.reject(t.length)):Promise.resolve(t[0])}return o.get(r)}}function l(e,t){const[,r]=t;for(const e in r){const t=Number(e),n=r[t];r[t]=(...e)=>{let[r,i,l]=e;try{n.apply(null,e);for(let e of[...o.listeners])e(r.exports,t)}catch(e){console.error(e)}finally{l.m[t]=n}},r[t].toString=()=>n.toString()}return e.webpackPush(t)}let a,p,s,c;!function(){let e=Object.defineProperty;Object.defineProperty=function(t,r,n){return(n.get||n.set)&&(n.configurable=!0),e.call(this,t,r,n)}}(),Object.defineProperty(unsafeWindow,r,{set(e){delete unsafeWindow[r],unsafeWindow[r]=e,Object.defineProperty(e,"push",{get:()=>Array.prototype.push,set:t=>{e.webpackPush=t,Object.defineProperty(e,"push",{value:l.bind(this,e)}),e.push([["X+"],{},e=>o.loader=e])}})}}),c=Promise.all([o.get((e=>"object"==typeof e&&"createElement"in e&&"cloneElement"in e)).then((e=>a=e)),o.get((e=>"object"==typeof e&&"createRoot"in e)).then((e=>p=e)),o.getString("link",(e=>e?.e)).then((e=>s=e.e))]);let d,u=[];GM.getValue("xp-filters").then((e=>{let t=e;t&&(u=f(t)),d=t}));function f(e){return e.split("\n").map((e=>e.trim())).filter((e=>e&&!e.startsWith("#"))).map((e=>"/"!=e.charAt(0)?[e.charAt(0),e.substring(1)]:["",e])).map((([e,t])=>[e,t.split("#")[0].trim(),t.split("#").slice(1).join("#").trim()])).map((([e,t,r])=>{let n;try{n=new RegExp(t.substring(t.indexOf("/")+1,t.lastIndexOf("/")),t.substring(t.lastIndexOf("/")+1))}catch(e){alert("Exception occurred while compiling regex, it has been skipped:\n"+e),i.warn(e)}return[e,n,r]})).filter((([,e])=>e))}function h(e,t,r,n){!function(e,t,r){Object.defineProperty(e,t,{value:new Proxy(e[t],{apply:r})})}(e,t,((e,t,i)=>{if(r){let e={};if(r(t,i,e),e.value)return e.value;e.args&&(i=e.args)}let o=Reflect.apply(e,t,i);if(n){let e=n(t,i,o);if(Array.isArray(e))return e[0]}return o}))}let m=[],g=[];function x(){GM.setValue("xp-follow-list",m.join("\n"));try{g.forEach((e=>e()))}catch(e){i.warn("Error while running follow list change callback:",e)}}GM.getValue("xp-follow-list").then((e=>{e&&(m=e.split("\n").filter((e=>0!=e.trim().length)))})),o.getString("isSuperFollowing",(e=>e?.Z?.prototype?.render)).then((e=>{h(e.Z.prototype,"render",void 0,((e,t,r)=>{let n=r.props.onFollow,i=r.props.onUnfollow;r.props.onFollow=function(){return-1==m.indexOf(r.props.name)&&(m.push(r.props.name),x()),n.apply(this,arguments)},r.props.onUnfollow=function(){let e=m.indexOf(r.props.name);return-1!=e&&(m.splice(e,1),x()),i.apply(this,arguments)}}))}));let b=!0;let w,y,v=[["Filters",function(){let[e,t]=a.useState("# Start a line with a hashtag to have it ignored as a comment\n# Press `Recompile` when all changes are done to apply them\n# Each line contains one regex statement with an optional comment\n# The comment following a regex is its name, shown on filtered posts\n# Optionally prefix a filter to only apply to [b]ios or [u]sernames.\n# The filtered field is shown and does not need to be in the filter name\n#\n# Example of a regex to filter out everyone with an empty bio:\n# b/^$/ # Empty");return d&&(t(d),d=void 0),a.createElement(a.Fragment,null,a.createElement("button",{className:"xp-button",onClick:function(){GM.setValue("xp-filters",e),u=f(e)}},"Save and apply"),a.createElement("textarea",{id:"xp-ui-filters-textarea",spellcheck:!1,value:e,onChange:e=>t(e.target.value)}))}],["Follow List",function(){const[,e]=a.useReducer((e=>e+1),0);return b&&(b=!1,g.push(e)),a.createElement("div",{id:"xp-ui-follow-list"},m.map((e=>s("/"+e,(t=>{let r=t();return delete r.style,delete r.hrefattrs,a.createElement("a",r,"@",e)})))))}]];function E(e){let[t,r]=a.useState(-1);const n=v[t]?.[1];return a.createElement(a.Fragment,null,a.createElement("div",{id:"xp-ui-bar"},a.createElement("button",{style:{marginBottom:"8px"},onClick:e.hide},"Hide"),v.map((([e],t)=>a.createElement("button",{onClick:()=>r(t)},e)))),-1==t?null:a.createElement("div",{id:"xp-ui-body"},a.createElement(n,null)))}function k(e,t,r,n,o){let l;for(let t=0;t<(n||1/0)&&e?.return&&!(l=r(e));t++)e=e.return;return l||void(o||i.warn(`Failed to find \`${t}\` in tree`))}o.getString("showHasNewItemsIndicator",(e=>e?.ZP)).then((e=>y=e.ZP)),o.getString("wideMode",(e=>e?.ZP)).then((e=>{h(e,"ZP",void 0,((e,t,r)=>{y&&r.props.children.props.children.splice(r.props.children.props.children.length-2,0,a.createElement(y,{"aria-label":"Open X+ Menu",label:"Open Menu",layout:"vertical",rank:99,onClick(e){e.preventDefault(),w.style.display=""},renderIcon:()=>a.createElement("div",{style:{width:"24px",height:"24px",fontSize:"24px",fontFamily:"TwitterChirp",lineHeight:"24px"}},"X+"),withLabel:r.props.children.props.children[0].props.withLabel}))}))})),c.then((()=>{w=document.createElement("div"),w.id="xp-ui-root",w.style.display="none",document.body.appendChild(w),p.createRoot(w).render(a.createElement(E,{hide:()=>w.style.display="none"})),document.addEventListener("keydown",(e=>{"Escape"==e.key&&"none"!=w.style.display&&(e.preventDefault(),e.stopPropagation(),w.style.display="none")}))})),o.getString("freedom_of_speech_not_reach",(e=>e?.ZP)).then((e=>{h(e.ZP.prototype,"render",((e,t,r)=>{e.filterChecked||(e.filterChecked=!0,e.filterReason=function(e){if(e.user.following||e.user.followed_by)return;for(let[t,r,n]of u){if(("n"==t||""==t)&&-1!=e.user.name.search(r))return`Name (${n||"Unspecified"})`;if(("b"==t||""==t)&&-1!=e.user.description.search(r))return`Bio (${n||"Unspecified"})`}return null}(e.props.tweet)),e.filterReason&&(r.value=a.createElement("div",{style:{color:"#b8babd",marginLeft:"4px",fontFamily:"TwitterChirp",fontSize:"15px",alignSelf:"center"},onClick:()=>(delete e.filterReason,e.forceUpdate())},`Filtered: ${e.filterReason}`))}))})),o.getString("_getUserScreenNameNode",(e=>e?.Z)).then((e=>{h(e.Z.prototype,"render",void 0,((e,t,r)=>{let n=k(e._reactInternals,"tweet",(e=>e.stateNode?.props?.tweet));if(!n)return r;let i=n.source_name.replace(/Twitter for/,"").replace(/Twitter Web App/,"Web").replace(/Twitter Web Client/,"Web Client").replace(/TweetDeck Web App/,"TweetDeck"),o=r.props.children.props.children.props.children[1].props;o.children=a.Children.toArray(o.children),o.children.push(a.createElement("a",{style:{color:"#b8babd",marginLeft:"4px",fontFamily:"TwitterChirp",fontSize:"15px",lineHeight:"20px",verticalAlign:"middle",textDecoration:"none",minWidth:"content-fit",flex:"1"},href:n.source_url},i||"Unknown"))}))})),window.dayjs.extend(window.dayjs_plugin_relativeTime),o.getString("joinDate",(e=>e?.Z?.type)).then((e=>{h(e.Z,"type",void 0,((e,t,r)=>{r?.props?.children&&(r.props.children+=` (${window.dayjs(t[0].joinDate).fromNow()})`)}))})),o.getString("amountOfTime",(e=>e?.Z)).then((e=>{h(e.Z.prototype,"render",void 0,((e,t,r)=>{r.props.children[1].props.onClick=()=>{let t=prompt("Enter observed time in hours:");if(!t)return;let r=(parseInt(t)-new Date(e.props.timestamp).getUTCHours())%24;r<-12&&(r+=24),r>14&&(r-=24),alert(0==r?"UTC":r>0?`UTC+${r}`:`UTC${r}`)}}))})),o.getString("_useUserHoverCardWrapper",(e=>e?.Z?.prototype?.render)).then((e=>{function t(e,t,r,n,i,o){let l=Math.abs(n)||0;return r&&1!=l&&(t+="s"),a.createElement(e,{className:"xp-userinfo-child",style:{color:n<i?"#FFF":"#71767B"},...o||{}},`${l} ${t}`)}h(e.Z.prototype,"render",void 0,((e,r,n)=>{let i=k(e._reactInternals,"user",(e=>e.pendingProps.user),25,!0);if(!i)return n;let o=[t("span","like",!0,i.favourites_count,100),t("span","post",!0,i.statuses_count,10),t("span","media",!1,i.media_count,5),t("a","list",!0,-(i.listed_count||0),0,{href:`${document.location.origin}/${i.screen_name}/lists/memberships`})];n.props.children.props.children.push(a.createElement("div",{className:"xp-userinfo-container"},o))}))})),unsafeWindow.xp={webpack:o,get filters(){return u}},setTimeout((()=>{document.getElementById("placeholder")&&location.reload()}),1e3);
