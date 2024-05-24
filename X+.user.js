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
var e=[],t=[];!function(r,n){if(r&&"undefined"!=typeof document){var o,i=!0===n.prepend?"prepend":"append",l=!0===n.singleTag,a="string"==typeof n.container?document.querySelector(n.container):document.getElementsByTagName("head")[0];if(l){var p=e.indexOf(a);-1===p&&(p=e.push(a)-1,t[p]={}),o=t[p]&&t[p][i]?t[p][i]:t[p][i]=s()}else o=s();65279===r.charCodeAt(0)&&(r=r.substring(1)),o.styleSheet?o.styleSheet.cssText+=r:o.appendChild(document.createTextNode(r))}function s(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),n.attributes)for(var t=Object.keys(n.attributes),r=0;r<t.length;r++)e.setAttribute(t[r],n.attributes[t[r]]);var o="prepend"===i?"afterbegin":"beforeend";return a.insertAdjacentElement(o,e),e}}("#xp-ui-root{backdrop-filter:blur(6px);color:#fff;display:flex;height:100%;position:fixed;top:0;width:100%}#xp-ui-body{display:flex;flex-direction:column;width:600px}#xp-ui-bar,#xp-ui-body{background-color:#000;border-left:1px solid var(--xp-accent);border-radius:16px;border-right:1px solid var(--xp-accent);margin:16px;padding:8px}#xp-ui-bar{display:flex;flex-direction:column;width:fit-content}#xp-ui-bar>button,.xp-button{background-color:#000;border:1px solid var(--xp-accent);border-radius:8px;padding:6px 12px}#xp-ui-bar>button:hover,.xp-button:hover{background-color:#222}#xp-ui-bar>button+button{margin-top:4px}#xp-ui-filters-textarea{border-radius:16px;box-sizing:border-box;height:100%;margin-top:8px;padding:8px;resize:none;white-space:nowrap;width:100%}#xp-ui-follow-list{align-self:flex-start;display:flex;flex-wrap:wrap}#xp-ui-follow-list>a{background-color:#111;border-radius:4px;color:#fff;font-family:TwitterChirp;font-size:16px;margin:2px;padding:2px 4px;text-align:center;text-decoration:none}:root{--xp-accent:#1d9bf0}.xp-userinfo-container{display:flex;flex-wrap:wrap;width:fit-content}.xp-userinfo-child{background-color:#202327;border-radius:4px;font-family:TwitterChirp;font-size:11px;margin-left:4px;padding:2px 4px;text-decoration:none}.xp-rich-text-editor{line-height:0px}.xp-rich-text-editor>button{background-color:transparent;border:1px solid #444;font-size:14px;margin-right:2px;padding:0 2px}",{});var r="webpackChunk_twitter_responsive_web";const n=["%cX+","padding: 0px 2px"];class o{static{this.log=console.log.bind(window,...n)}static{this.warn=console.warn.bind(window,...n)}}class i{static{this.listeners=new Set}static get(e){return new Promise((t=>{let r=(n,o)=>{e(n,o)&&(t(n),i.listeners.delete(r))};i.listeners.add(r)}))}static getID(e){let t=i.loader?.c[e];return t?Promise.resolve(t):i.get((t=>e==t))}static getString(e,t){let r=r=>{const n=t(r);return n?.toString==String.toString&&n.toString().includes(e)};if(i.loader?.c){let t=Object.values(i.loader?.c).map((e=>e.exports)).filter(r);return 1!=t.length?(o.warn(`${t.length} results from string search: "${e}"`),Promise.reject(t.length)):Promise.resolve(t[0])}return i.get(r)}}function l(e,t){const[,r]=t;for(const e in r){const t=Number(e),n=r[t];r[t]=(...e)=>{let[r,o,l]=e;try{n.apply(null,e);for(let e of[...i.listeners])e(r.exports,t)}catch(e){console.error(e)}finally{l.m[t]=n}},r[t].toString=()=>n.toString()}return e.webpackPush(t)}let a,p,s,c;!function(){let e=Object.defineProperty;Object.defineProperty=function(t,r,n){return(n.get||n.set)&&(n.configurable=!0),e.call(this,t,r,n)}}(),Object.defineProperty(unsafeWindow,r,{set(e){delete unsafeWindow[r],unsafeWindow[r]=e,Object.defineProperty(e,"push",{get:()=>Array.prototype.push,set:t=>{e.webpackPush=t,Object.defineProperty(e,"push",{value:l.bind(this,e)}),e.push([["X+"],{},e=>i.loader=e])}})}}),c=Promise.all([i.get((e=>"object"==typeof e&&"createElement"in e&&"cloneElement"in e)).then((e=>a=e)),i.get((e=>"object"==typeof e&&"createRoot"in e)).then((e=>p=e)),i.getString("link",(e=>e?.e)).then((e=>s=e.e))]);let d,u=[];GM.getValue("xp-filters").then((e=>{let t=e;t&&(u=f(t)),d=t}));function f(e){return e.split("\n").map((e=>e.trim())).filter((e=>e&&!e.startsWith("#"))).map((e=>"/"!=e.charAt(0)?[e.charAt(0),e.substring(1)]:["",e])).map((([e,t])=>[e,t.split("#")[0].trim(),t.split("#").slice(1).join("#").trim()])).map((([e,t,r])=>{let n;try{n=new RegExp(t.substring(t.indexOf("/")+1,t.lastIndexOf("/")),t.substring(t.lastIndexOf("/")+1))}catch(e){alert("Exception occurred while compiling regex, it has been skipped:\n"+e),o.warn(e)}return[e,n,r]})).filter((([,e])=>e))}function h(e,t,r,n){!function(e,t,r){Object.defineProperty(e,t,{value:new Proxy(e[t],{apply:r})})}(e,t,((e,t,o)=>{if(r){let e={};if(r(t,o,e),e.value)return e.value;e.args&&(o=e.args)}let i=Reflect.apply(e,t,o);if(n){let e=n(t,o,i);if(Array.isArray(e))return e[0]}return i}))}let g=[],m=[];function x(){GM.setValue("xp-follow-list",g.join("\n"));try{m.forEach((e=>e()))}catch(e){o.warn("Error while running follow list change callback:",e)}}GM.getValue("xp-follow-list").then((e=>{e&&(g=e.split("\n").filter((e=>0!=e.trim().length)))})),i.getString("isSuperFollowing",(e=>e?.Z?.prototype?.render)).then((e=>{h(e.Z.prototype,"render",void 0,((e,t,r)=>{let n=r.props.onFollow,o=r.props.onUnfollow;r.props.onFollow=function(){return-1==g.indexOf(r.props.name)&&(g.push(r.props.name),x()),n.apply(this,arguments)},r.props.onUnfollow=function(){let e=g.indexOf(r.props.name);return-1!=e&&(g.splice(e,1),x()),o.apply(this,arguments)}}))}));let b=!0;let y,w,v=[["Filters",function(){let[e,t]=a.useState("# Start a line with a hashtag to have it ignored as a comment\n# Press `Recompile` when all changes are done to apply them\n# Each line contains one regex statement with an optional comment\n# The comment following a regex is its name, shown on filtered posts\n# Optionally prefix a filter to only apply to [b]ios or [u]sernames.\n# The filtered field is shown and does not need to be in the filter name\n#\n# Example of a regex to filter out everyone with an empty bio:\n# b/^$/ # Empty");return d&&(t(d),d=void 0),a.createElement(a.Fragment,null,a.createElement("button",{className:"xp-button",onClick:function(){GM.setValue("xp-filters",e),u=f(e)}},"Save and apply"),a.createElement("textarea",{id:"xp-ui-filters-textarea",spellcheck:!1,value:e,onChange:e=>t(e.target.value)}))}],["Follow List",function(){const[,e]=a.useReducer((e=>e+1),0);return b&&(b=!1,m.push(e)),a.createElement("div",{id:"xp-ui-follow-list"},g.map((e=>s("/"+e,(t=>{let r=t();return delete r.style,delete r.hrefattrs,a.createElement("a",r,"@",e)})))))}]];function E(e){let[t,r]=a.useState(-1);const n=v[t]?.[1];return a.createElement(a.Fragment,null,a.createElement("div",{id:"xp-ui-bar"},a.createElement("button",{style:{marginBottom:"8px"},onClick:e.hide},"Hide"),v.map((([e],t)=>a.createElement("button",{onClick:()=>r(t)},e)))),-1==t?null:a.createElement("div",{id:"xp-ui-body"},a.createElement(n,null)))}function S(e,t,r,n,i){let l;for(let t=0;t<(n||1/0)&&e?.return&&!(l=r(e));t++)e=e.return;return l||void(i||o.warn(`Failed to find \`${t}\` in tree`))}i.getString("showHasNewItemsIndicator",(e=>e?.ZP)).then((e=>w=e.ZP)),i.getString("wideMode",(e=>e?.ZP)).then((e=>{h(e,"ZP",void 0,((e,t,r)=>{if(!w)return;if(t[0].xpAdded)return;t[0].xpAdded=!0;let n=r.props.children.props.children;n.splice(n.length-2,0,a.createElement(w,{"aria-label":"Open X+ Menu",label:"Open Menu",layout:"vertical",rank:0,onClick(e){e.preventDefault(),y.style.display=""},renderIcon:()=>a.createElement("div",{style:{width:"24px",height:"24px",fontSize:"24px",fontFamily:"TwitterChirp",lineHeight:"24px"}},"X+"),withLabel:r.props.children.props.children[0].props.withLabel}))}))})),c.then((()=>{y=document.createElement("div"),y.id="xp-ui-root",y.style.display="none",document.body.appendChild(y),p.createRoot(y).render(a.createElement(E,{hide:()=>y.style.display="none"})),document.addEventListener("keydown",(e=>{"Escape"==e.key&&"none"!=y.style.display&&(e.preventDefault(),e.stopPropagation(),y.style.display="none")}))})),i.getString("freedom_of_speech_not_reach",(e=>e?.ZP)).then((e=>{h(e.ZP.prototype,"render",((e,t,r)=>{e.filterChecked||(e.filterChecked=!0,e.filterReason=function(e){if(e.user.following||e.user.followed_by)return;for(let[t,r,n]of u){if(("n"==t||""==t)&&-1!=e.user.name.search(r))return`Name (${n||"Unspecified"})`;if(("b"==t||""==t)&&-1!=e.user.description.search(r))return`Bio (${n||"Unspecified"})`}return null}(e.props.tweet)),e.filterReason&&(r.value=a.createElement("div",{style:{color:"#b8babd",marginLeft:"4px",fontFamily:"TwitterChirp",fontSize:"15px",alignSelf:"center"},onClick:()=>(delete e.filterReason,e.forceUpdate())},`Filtered: ${e.filterReason}`))}))})),i.getString("_getUserScreenNameNode",(e=>e?.Z)).then((e=>{h(e.Z.prototype,"render",void 0,((e,t,r)=>{let n=S(e._reactInternals,"tweet",(e=>e.stateNode?.props?.tweet));if(!n)return r;let o=n.source_name.replace(/Twitter for/,"").replace(/Twitter Web App/,"Web").replace(/Twitter Web Client/,"Web Client").replace(/TweetDeck Web App/,"TweetDeck"),i=r.props.children.props.children.props.children[1].props;i.children=a.Children.toArray(i.children),i.children.push(a.createElement("a",{style:{color:"#b8babd",marginLeft:"4px",fontFamily:"TwitterChirp",fontSize:"15px",lineHeight:"20px",verticalAlign:"middle",textDecoration:"none",minWidth:"content-fit",flex:"1"},href:n.source_url},o||"Unknown"))}))})),window.dayjs.extend(window.dayjs_plugin_relativeTime),i.getString("joinDate",(e=>e?.Z?.type)).then((e=>{h(e.Z,"type",void 0,((e,t,r)=>{r?.props?.children&&(r.props.children+=` (${window.dayjs(t[0].joinDate).fromNow()})`)}))}));const k={a:"а",A:"А",b:"ᖯ",B:"Β",c:"с",C:"Ϲ",d:"ԁ",D:"Ꭰ",e:"е",E:"ⴹ",f:"ẝ",F:"ꓝ",g:"ɡ",G:"Ꮐ",h:"һ",H:"Η",i:"і",I:"Ɩ",j:"ј",J:"Ϳ",k:void 0,K:"К",l:"ӏ",L:"Ꮮ",m:"ⅿ",M:"M",n:"ո",N:"Ν",o:"о",O:"О",p:"р",P:"Ρ",q:"ԛ",Q:"ⵕ",r:"г",R:"ꓣ",s:"ꜱ",S:"Ѕ",t:void 0,T:"Τ",u:"ս",U:"Ս",v:"ᴠ",V:"⋁",w:"ᴡ",W:"Ԝ",x:"х",X:"Χ",y:"у",Y:"Υ",z:"ᴢ",Z:"Ζ"},C=Object.entries(k).reduce(((e,[t,r])=>(e[r]=t,e)),{}),P=[["B",[[97,122,119834],[65,90,119808]]],["I",[[97,122,119886],[65,90,119860]]],["BI",[[97,122,119938],[65,90,119912]]],["DS",[[97,122,120146],[65,90,120120,[2,7,13,15,16,17,25]]]]];i.getString("_handleEditorContainerRef",(e=>e?.prototype?.render)).then((e=>{h(e.prototype,"render",void 0,((e,t,r)=>{function n(e){let t;if(t=C[e])return t;let r=e.codePointAt(0);if(!r)return e;for(let e of P)for(let[t,n,o]of e[1])if(r>=o&&r<=o+n-t)return String.fromCodePoint(r-o+t);return e}function o(t){e.props.handlePastedText(Array.from(function(){let t=e.props.editorState.getSelection(),r=t.getStartOffset(),n=t.getEndOffset(),o=e.props.editorState.getCurrentContent().getBlockForKey(t.getAnchorKey()).getText();return r==n?"":o.slice(r,n)}()).map(t).join(""),"",e.props.editorState)}r.props.children.unshift(a.createElement("div",{className:"xp-rich-text-editor",onMouseDown:e=>e.preventDefault()},a.createElement("button",{onClick:()=>o((e=>n(e)))},"R"),a.createElement("button",{onClick:()=>{return e=k,void o((t=>{let r=n(t);return e[r]||r}));var e}},"C"),P.map((([e,t])=>a.createElement("button",{onClick:()=>function(e){o((t=>{let r=n(t).codePointAt(0);if(!r)return t;console.log(r);for(let[t,n,o,i]of e)if(!(r<t||r>n||i&&i.includes(r-t)))return String.fromCodePoint(r+o-t);return t}))}(t)},e)))))}))})),i.getString("amountOfTime",(e=>e?.Z)).then((e=>{h(e.Z.prototype,"render",void 0,((e,t,r)=>{r.props.children[1].props.onClick=()=>{let t=prompt("Enter observed time in hours:");if(!t)return;let r=(parseInt(t)-new Date(e.props.timestamp).getUTCHours())%24;r<-12&&(r+=24),r>14&&(r-=24),alert(0==r?"UTC":r>0?`UTC+${r}`:`UTC${r}`)}}))})),i.getString("_useUserHoverCardWrapper",(e=>e?.Z?.prototype?.render)).then((e=>{function t(e,t,r,n,o,i){let l=Math.abs(n)||0;return r&&1!=l&&(t+="s"),a.createElement(e,{className:"xp-userinfo-child",style:{color:n<o?"#FFF":"#71767B"},...i||{}},`${l} ${t}`)}h(e.Z.prototype,"render",void 0,((e,r,n)=>{let o=S(e._reactInternals,"user",(e=>e.pendingProps.user),25,!0);if(!o)return n;let i=[t("span","like",!0,o.favourites_count,100),t("span","post",!0,o.statuses_count,10),t("span","media",!1,o.media_count,5),t("a","list",!0,-(o.listed_count||0),0,{href:`${document.location.origin}/${o.screen_name}/lists/memberships`})];n.props.children.props.children.push(a.createElement("div",{className:"xp-userinfo-container"},i))}))})),unsafeWindow.xp={webpack:i,get filters(){return u}},setTimeout((()=>{document.getElementById("placeholder")&&location.reload()}),1e3);
