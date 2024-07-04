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
var e=[],t=[];!function(r,n){if(r&&"undefined"!=typeof document){var o,i=!0===n.prepend?"prepend":"append",l=!0===n.singleTag,p="string"==typeof n.container?document.querySelector(n.container):document.getElementsByTagName("head")[0];if(l){var a=e.indexOf(p);-1===a&&(a=e.push(p)-1,t[a]={}),o=t[a]&&t[a][i]?t[a][i]:t[a][i]=s()}else o=s();65279===r.charCodeAt(0)&&(r=r.substring(1)),o.styleSheet?o.styleSheet.cssText+=r:o.appendChild(document.createTextNode(r))}function s(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),n.attributes)for(var t=Object.keys(n.attributes),r=0;r<t.length;r++)e.setAttribute(t[r],n.attributes[t[r]]);var o="prepend"===i?"afterbegin":"beforeend";return p.insertAdjacentElement(o,e),e}}('#xp-ui-theme-picker>div{font-size:24px;text-transform:capitalize}#xp-ui-theme-picker>div>div{display:flex}#xp-ui-theme-picker button{aspect-ratio:1/1;border:0;cursor:pointer;flex:1 1;margin:0 4px}#xp-ui-root{backdrop-filter:blur(6px);color:#fff;display:flex;font-family:TwitterChirp;height:100%;position:fixed;top:0;width:100%}#xp-ui-body{display:flex;flex-direction:column;width:600px}#xp-ui-bar,#xp-ui-body{background-color:#000;border-left:1px solid var(--xp-accent);border-radius:16px;border-right:1px solid var(--xp-accent);margin:16px;overflow-y:auto;padding:8px}#xp-ui-bar{display:flex;flex-direction:column;width:fit-content}#xp-ui-bar>button,.xp-button{background-color:#000;border:1px solid var(--xp-accent);border-radius:8px;padding:6px 12px}#xp-ui-bar>button:hover,.xp-button:hover{background-color:#222}#xp-ui-bar>button+button{margin-top:4px}#xp-ui-filters-textarea{border-radius:16px;box-sizing:border-box;height:100%;margin-top:8px;padding:8px;resize:none;white-space:nowrap;width:100%}#xp-ui-follow-list{align-self:flex-start;display:flex;flex-wrap:wrap}#xp-ui-follow-list>a{background-color:#111;border-radius:4px;color:#fff;font-family:TwitterChirp;font-size:16px;margin:2px;padding:2px 4px;text-align:center;text-decoration:none}:root{--xp-accent:#1d9bf0}.xp-userinfo-container{display:flex;flex-wrap:wrap;width:fit-content}.xp-userinfo-child{background-color:#202327;border-radius:4px;font-family:TwitterChirp;font-size:11px;margin-left:4px;padding:2px 4px;text-decoration:none}.xp-rich-text-editor{line-height:0px}.xp-rich-text-editor>button{background-color:transparent;border:1px solid #444;font-size:14px;margin-right:2px;padding:0 2px}.xp-quote-count{color:#71767b;flex:1;font-family:TwitterChirp;font-size:13px;line-height:20px;margin:auto;text-decoration:none}.xp-quote-count:before{content:"Q ";font-size:16px;vertical-align:bottom}',{});var r="webpackChunk_twitter_responsive_web";const n=["%cX+","padding: 0px 2px"];class o{static{this.log=console.log.bind(window,...n)}static{this.warn=console.warn.bind(window,...n)}static{this.error=console.error.bind(window,...n)}}class i{static{this.listeners=new Set}static get(e){return new Promise((t=>{let r=(n,o)=>{e(n,o)&&(t(n),i.listeners.delete(r))};i.listeners.add(r)}))}static getID(e){let t=i.loader?.c[e];return t?Promise.resolve(t):i.get((t=>e==t))}static getString(e,t){let r=r=>{const n=t(r);return n?.toString==String.toString&&n.toString().includes(e)};if(i.loader?.c){let t=Object.values(i.loader?.c).map((e=>e.exports)).filter(r);return 1!=t.length?(o.warn(`${t.length} results from string search: "${e}"`),Promise.reject(t.length)):Promise.resolve(t[0])}return i.get(r)}static getProps(e,...t){let r=r=>{let n=e(r);return!!n&&t.some((e=>n[e]))};if(i.loader?.c){let e=Object.values(i.loader?.c).map((e=>e.exports)).filter(r);return 1!=e.length?(o.warn(`${e.length} results from prop search: "${t}"`),Promise.reject(e.length)):Promise.resolve(e[0])}return i.get(r)}}function l(e,t){const[,r]=t;for(const e in r){const t=Number(e),n=r[t];r[t]=(...e)=>{let[r,l,p]=e;try{n.apply(null,e),r.exports instanceof Object&&Object.defineProperty(r.exports,"__xp_module",{get:()=>n});for(let e of[...i.listeners])e(r.exports,t)}catch(e){o.error(e)}finally{p.m[t]=n}},r[t].toString=()=>n.toString()}return e.webpackPush(t)}let p,a,s,c;!function(){let e=Object.defineProperty;Object.defineProperty=function(t,r,n){return(n.get||n.set)&&(n.configurable=!0),e.call(this,t,r,n)}}(),Object.defineProperty(unsafeWindow,r,{set(e){delete unsafeWindow[r],unsafeWindow[r]=e,Object.defineProperty(e,"push",{get:()=>Array.prototype.push,set:t=>{e.webpackPush=t,Object.defineProperty(e,"push",{value:l.bind(this,e)}),e.push([["X+"],{},e=>i.loader=e])}})}}),c=Promise.all([i.getProps((e=>e),"createElement").then((e=>p=e)),i.getProps((e=>e),"createRoot").then((e=>a=e)),i.getString("link",(e=>e?.e)).then((e=>s=e.e))]);let d,u=[];GM.getValue("xp-filters").then((e=>{let t=e;t&&(u=f(t)),d=t}));function f(e){return e.split("\n").map((e=>e.trim())).filter((e=>e&&!e.startsWith("#"))).map((e=>"/"!=e.charAt(0)?[e.charAt(0),e.substring(1)]:["",e])).map((([e,t])=>[e,t.split("#")[0].trim(),t.split("#").slice(1).join("#").trim()])).map((([e,t,r])=>{let n;try{n=new RegExp(t.substring(t.indexOf("/")+1,t.lastIndexOf("/")),t.substring(t.lastIndexOf("/")+1))}catch(e){alert("Exception occurred while compiling regex, it has been skipped:\n"+e),o.warn(e)}return[e,n,r]})).filter((([,e])=>e))}const h=Symbol("isProxy");var m=Object.freeze({__proto__:null,isProxy:h});function g(e,t,r,n){!function(e,t,r){let n=e?.[t];n instanceof Object&&!n[h]&&Object.defineProperty(e,t,{value:new Proxy(e[t],{apply:r,get:(e,t,r)=>t==h||Reflect.get(e,t,r)})})}(e,t,((e,t,o)=>{if(r){let e={};if(r(t,o,e),e.value)return e.value;e.args&&(o=e.args)}let i=Reflect.apply(e,t,o);if(n){let e=n(t,o,i);if(Array.isArray(e))return e[0]}return i}))}class x{constructor(e,t){this.pre=[],this.post=[],g(e,t,b.bind(this),y.bind(this))}subscribe(e,t,r){if(r){t.priority=r;for(let n=0;n<e.length;n++){let i=e[n].priority||0;if(r>i)return void e.splice(n,0,t);r==i&&Number.isFinite(r)&&o.warn(`Two patches have the same priority (${r}):`,t,e[n])}}e.push(t)}}function b(e,t,r){for(let n in this.pre)try{if(this.pre[n](e,t,r),r.value)return;r.args&&(t=r.args)}catch(e){o.error("Exception occurred in pre patch:",e,"Patch list:",this.pre),delete this.pre[n]}}function y(e,t,r){for(let n in this.post)try{let o=this.post[n](e,t,r);Array.isArray(o)&&1==o.length&&(r=o[0])}catch(e){o.error("Exception occurred in post patch:",e,"Patch list:",this.post),delete this.post[n]}}let w=[],v=[];function C(){GM.setValue("xp-follow-list",w.join("\n"));try{v.forEach((e=>e()))}catch(e){o.warn("Error while running follow list change callback:",e)}}function E(e,t,r,n){let i;for(let n=0;n<(r||1/0)&&e?.return&&!(i=t(e));n++)e=e.return;return i||void(n||o.warn("Failed to find prop in tree. Accessor:",t))}function k(e,t,r){return s(r,(r=>{let n=r(e);return n.style={...n.style[1],...n.style[0]},p.createElement("a",n,t)}))}GM.getValue("xp-follow-list").then((e=>{e&&(w=e.split("\n").filter((e=>0!=e.trim().length)))})),i.getString("isSuperFollowing",(e=>e?.Z?.prototype?.render)).then((e=>{g(e.Z.prototype,"render",void 0,((e,t,r)=>{let n=r.props.onFollow,o=r.props.onUnfollow;r.props.onFollow=function(){return-1==w.indexOf(r.props.name)&&(w.push(r.props.name),C()),n.apply(this,arguments)},r.props.onUnfollow=function(){let e=w.indexOf(r.props.name);return-1!=e&&(w.splice(e,1),C()),o.apply(this,arguments)}}))}));let P=!0;let _=i.getProps((e=>e?.default),"theme"),S=!1;_.then((e=>{e.default.onThemeChange((e=>{S&&(S=!1,document.documentElement.style.setProperty("--xp-accent",e.colors[e.primaryColorName]))})),GM.getValue("xp-theme").then((t=>{setTimeout((()=>{S=!0,e.default.setPrimaryColor(t)}),1e3)}))}));let T,O,A=[["Filters",function(){let[e,t]=p.useState("# Start a line with a hashtag to have it ignored as a comment\n# Press `Recompile` when all changes are done to apply them\n# Each line contains one regex statement with an optional comment\n# The comment following a regex is its name, shown on filtered posts\n# Optionally prefix a filter to only apply to [b]ios or [u]sernames.\n# The filtered field is shown and does not need to be in the filter name\n#\n# Example of a regex to filter out everyone with an empty bio:\n# b/^$/ # Empty");return d&&(t(d),d=void 0),p.createElement(p.Fragment,null,p.createElement("button",{className:"xp-button",onClick:function(){GM.setValue("xp-filters",e),u=f(e)}},"Save and apply"),p.createElement("textarea",{id:"xp-ui-filters-textarea",spellCheck:!1,value:e,onChange:e=>t(e.target.value)}))}],["Follow List",function(){const[,e]=p.useReducer((e=>e+1),0);return P&&(P=!1,v.push(e)),p.createElement("div",{id:"xp-ui-follow-list"},w.map((e=>k({},"@"+e,"/"+e))))}],["Theme Picker",function(){let[e,t]=p.useState(void 0),[r,n]=p.useState(void 0);return p.useEffect((()=>{_.then((e=>{t(e.default),n(function(e){return Object.keys(e).filter((e=>e.endsWith("600"))).filter((e=>!e.startsWith("primary"))).map((e=>e.substring(0,e.length-3))).map((t=>[t,Object.entries(e).filter((([e])=>e.startsWith(t))).map((([e,t])=>[e,t]))]))}(e.default.theme.colors))}))}),[]),e?p.createElement("div",{id:"xp-ui-theme-picker"},r.map((([t,r])=>p.createElement("div",null,t,p.createElement("div",null,r.map((([t,r])=>p.createElement("button",{style:{backgroundColor:r},onClick:()=>{S=!0,e.setPrimaryColor(t),GM.setValue("xp-theme",t)},title:t})))))))):p.createElement("div",null,"Theme data not found.")}]];function j(e){let[t,r]=p.useState(-1);const n=A[t]?.[1];return p.createElement(p.Fragment,null,p.createElement("div",{id:"xp-ui-bar"},p.createElement("button",{style:{marginBottom:"8px"},onClick:e.hide},"Hide"),A.map((([e],t)=>p.createElement("button",{onClick:()=>r(t)},e)))),-1==t?null:p.createElement("div",{id:"xp-ui-body"},p.createElement(n,null)))}i.getString("showHasNewItemsIndicator",(e=>e?.ZP)).then((e=>O=e.ZP)),i.getString("wideMode",(e=>e?.ZP)).then((e=>{g(e,"ZP",void 0,((e,t,r)=>{if(!O)return;if(t[0].xpAdded)return;t[0].xpAdded=!0;let n=r.props.children.props.children;n.splice(n.length-2,0,p.createElement(O,{"aria-label":"Open X+ Menu",label:"Open Menu",layout:"vertical",rank:0,onClick(e){e.preventDefault(),T.style.display=""},renderIcon:()=>p.createElement("div",{style:{width:"24px",height:"24px",fontSize:"24px",fontFamily:"TwitterChirp",lineHeight:"24px"}},"X+"),withLabel:r.props.children.props.children[0].props.withLabel}))}))})),c.then((()=>{T=document.createElement("div"),T.id="xp-ui-root",T.style.display="none",document.body.appendChild(T),a.createRoot(T).render(p.createElement(j,{hide:()=>T.style.display="none"})),document.addEventListener("keydown",(e=>{"Escape"==e.key&&"none"!=T.style.display&&(e.preventDefault(),e.stopPropagation(),T.style.display="none")}))}));i.getString("freedom_of_speech_not_reach",(e=>e?.ZP)).then((e=>new x(e.ZP.prototype,"render"))).then((e=>e.subscribe(e.pre,((e,t,r)=>{e.filterChecked||(e.filterChecked=!0,e.filterReason=function(e){if(e.user.following||e.user.followed_by)return;for(let[t,r,n]of u){if(("n"==t||""==t)&&-1!=e.user.name.search(r))return`Name (${n||"Unspecified"})`;if(("b"==t||""==t)&&-1!=e.user.description.search(r))return`Bio (${n||"Unspecified"})`}return null}(e.props.tweet)),e.filterReason&&(r.value=p.createElement("div",{style:{color:"#b8babd",marginLeft:"4px",fontFamily:"TwitterChirp",fontSize:"15px",alignSelf:"center"},onClick:()=>(delete e.filterReason,e.forceUpdate())},`Filtered: ${e.filterReason}`))}))));const W=i.getString("_getUserScreenNameNode",(e=>e?.Z)).then((e=>new x(e.Z.prototype,"render")));W.then((e=>e.subscribe(e.post,(e=>{e.props.tweet=E(e._reactInternals,(e=>e.stateNode?.props?.tweet))}),1/0))),W.then((e=>e.subscribe(e.post,((e,t,r)=>{let n=E(e._reactInternals,(e=>e.stateNode?.props?.tweet));if(!n)return r;let o=n.source_name.replace(/Twitter for/,"").replace(/Twitter Web App/,"Web").replace(/Twitter Web Client/,"Web Client").replace(/TweetDeck Web App/,"TweetDeck"),i=r.props.children.props.children.props.children[1].props;i.children=p.Children.toArray(i.children).concat(k({style:{color:"#b8babd",marginLeft:"4px",fontFamily:"TwitterChirp",fontSize:"15px",lineHeight:"20px",verticalAlign:"middle",textDecoration:"none",minWidth:"content-fit",flex:"1"}},o||"Unknown",n.source_url))})))),i.getString("_viewCountsPublicVisibilityEnabled",(e=>e?.__xp_module)).then((e=>{let t=e.Z.WrappedComponent.type.WrappedComponent.type,r=t.render;t.render=function(){let e=r.apply(this,arguments);return g(e.props.wrappedComponent.WrappedComponent.prototype,"render",void 0,((e,t,r)=>{let n=r.props.children[1].props;n.retweetCount=e.props.tweet.retweet_count,n.quoteCount=e.props.tweet.quote_count})),t.render=r,e}})),i.getProps((e=>e?.Z),"ActionLike").then((e=>{g(e,"Z",void 0,((e,[t],r)=>{if(t.quoteCount+t.retweetCount==0)return;r.props.children.props.children.splice(2,0,k({className:"xp-quote-count"},t.quoteCount,`/${t.tweetLink}/quotes`))}))})),window.dayjs.extend(window.dayjs_plugin_relativeTime),i.getString("joinDate",(e=>e?.Z?.type)).then((e=>{g(e.Z,"type",void 0,((e,t,r)=>{r?.props?.children&&(r.props.children+=` (${window.dayjs(t[0].joinDate).fromNow()})`)}))}));const F={a:"а",A:"А",b:"ᖯ",B:"Β",c:"с",C:"Ϲ",d:"ԁ",D:"Ꭰ",e:"е",E:"ⴹ",f:"ẝ",F:"ꓝ",g:"ɡ",G:"Ꮐ",h:"һ",H:"Η",i:"і",I:"Ɩ",j:"ј",J:"Ϳ",k:void 0,K:"К",l:"ӏ",L:"Ꮮ",m:"ⅿ",M:"M",n:"ո",N:"Ν",o:"о",O:"О",p:"р",P:"Ρ",q:"ԛ",Q:"ⵕ",r:"г",R:"ꓣ",s:"ꜱ",S:"Ѕ",t:void 0,T:"Τ",u:"ս",U:"Ս",v:"ᴠ",V:"⋁",w:"ᴡ",W:"Ԝ",x:"х",X:"Χ",y:"у",Y:"Υ",z:"ᴢ",Z:"Ζ"},N=Object.entries(F).reduce(((e,[t,r])=>(e[r]=t,e)),{}),Z=[["B",[[97,122,119834],[65,90,119808]]],["I",[[97,122,119886],[65,90,119860]]],["BI",[[97,122,119938],[65,90,119912]]],["DS",[[97,122,120146],[65,90,120120,[2,7,13,15,16,17,25]]]]];i.getString("_handleEditorContainerRef",(e=>e?.prototype?.render)).then((e=>{g(e.prototype,"render",void 0,((e,t,r)=>{function n(e){let t;if(t=N[e])return t;let r=e.codePointAt(0);if(!r)return e;for(let e of Z)for(let[t,n,o]of e[1])if(r>=o&&r<=o+n-t)return String.fromCodePoint(r-o+t);return e}function o(t){e.props.handlePastedText(Array.from(function(){let t=e.props.editorState.getSelection(),r=t.getStartOffset(),n=t.getEndOffset(),o=e.props.editorState.getCurrentContent().getBlockForKey(t.getAnchorKey()).getText();return r==n?"":o.slice(r,n)}()).map(t).join(""),"",e.props.editorState)}r.props.children.unshift(p.createElement("div",{className:"xp-rich-text-editor",onMouseDown:e=>e.preventDefault()},p.createElement("button",{onClick:()=>o((e=>n(e)))},"R"),p.createElement("button",{onClick:()=>{return e=F,void o((t=>{let r=n(t);return e[r]||r}));var e}},"C"),Z.map((([e,t])=>p.createElement("button",{onClick:()=>function(e){o((t=>{let r=n(t).codePointAt(0);if(!r)return t;for(let[t,n,o,i]of e)if(!(r<t||r>n||i&&i.includes(r-t)))return String.fromCodePoint(r+o-t);return t}))}(t)},e)))))}))})),i.getString("amountOfTime",(e=>e?.Z)).then((e=>{g(e.Z.prototype,"render",void 0,((e,t,r)=>{r.props.children[1].props.onClick=()=>{let t=prompt("Enter observed time in hours:");if(!t)return;let r=(parseInt(t)-new Date(e.props.timestamp).getUTCHours())%24;r<-12&&(r+=24),r>14&&(r-=24),alert(0==r?"UTC":r>0?`UTC+${r}`:`UTC${r}`)}}))}));const I=i.getString("_useUserHoverCardWrapper",(e=>e?.Z?.prototype?.render)).then((e=>new x(e.Z.prototype,"render")));function R(e,t){if(e||t)return"xp-user-"+(e&&t?"mutual":e?"followed":"follower")}function $(e,t,r,n){let o=Math.abs(r)||0;return t&&1!=o&&(e+="s"),[{className:"xp-userinfo-child",style:{color:r<n?"#FFF":"#71767B"}},`${o} ${e}`]}function M(e,t){t&&e(t)}function D(e){let t,r=e.props.playerState.tracks.flatMap((e=>e.variants)).filter((e=>"video/mp4"==e.type));for(let e of r)(t?.bitrate||0<e.bitrate)&&(t=e);if(t)return t.src;o.warn("Failed to get download url for video:",e.props.playerState)}let z;W.then((e=>e.subscribe(e.post,((e,t,r)=>{let n=e.props.tweet.retweeted_status?.user||e.props.tweet.user;if(!n)return;let o=R(n.following,n.followed_by);o&&(r.props.children=[p.createElement("span",{className:o}),...p.Children.toArray(r.props.children)])}),-100))),I.then((e=>e.subscribe(e.post,((e,t,r)=>{let n=E(e._reactInternals,(e=>e?.stateNode?.props?.hasOwnProperty("isFollowing")&&e.stateNode.props||void 0),void 0,!0);if(!n)return;let o=R(n.isFollowing,n.isFollowedBy);o&&r.props.children.props.children.unshift(p.createElement("span",{className:o}))}),-100))),I.then((e=>e.subscribe(e.post,((e,t,r)=>{let n=E(e._reactInternals,(e=>e.pendingProps.user),25,!0);if(!n)return;let o=[p.createElement("span",...$("like",!0,n.favourites_count,100)),p.createElement("span",...$("post",!0,n.statuses_count,10)),p.createElement("span",...$("media",!1,n.media_count,5)),k(...$("list",!0,-(n.listed_count||0),0),`/${n.screen_name}/lists/memberships`)];r.props.children.props.children.push(p.createElement("div",{className:"xp-userinfo-container"},o))})))),i.getString("_handleCopyVideoAddress",(e=>e?.Z?.prototype?.render)).then((e=>{g(e.Z.prototype,"render",void 0,((e,t,r)=>{e.state.openContextMenu&&g(r.props,"children",void 0,((t,r,n)=>{let o=n.props.children[1].props,i=[p.createElement(o.children.type,{actionText:"Copy download link",onClick:()=>M(navigator.clipboard.writeText.bind(navigator.clipboard),D(e)),withBottomBorder:!1}),p.createElement(o.children.type,{actionText:"Open video source",onClick:()=>M(window.open,D(e)),withBottomBorder:!1})];o.children=p.Children.toArray(o.children).concat(i)}))}))})),i.get((e=>{let t=e?.default?.WrappedComponent?.type?.WrappedComponent?.type?.render;if("function"!=typeof t)return!1;let r=t()?.props?.wrappedComponent?.WrappedComponent?.prototype;if(!r)return!1;let n="_shouldIncludeTweetAppealOption"in r;return n&&(z=r),n})).then((()=>{g(z,"render",(e=>{g(e,"_getActionItemsAndDividerIndices",void 0,((t,r,n)=>{n[0].push({text:"View community notes",link:"/i/birdwatch/t/"+e.props.tweet.id_str})}))}))})),i.get((e=>e?.HWCard)).then((e=>{g(e.HWCard.prototype,"render",(e=>{e.props.card.binding_values[h]||(e.props.card.binding_values=new Proxy(e.props.card.binding_values,{get(e,t,r){if(t==h)return!0;let n=Reflect.get(e,t,r);if(!n||"string"!=typeof t||!t.endsWith("_label"))return n;let o=t.substring(0,8)+"count";return new Proxy(n,{get(t,r,n){let i=Reflect.get(t,r,n);return"string_value"!=r?i:`${i} (${e[o]?.string_value||"0"})`}})}}))}))})),unsafeWindow.xp={symbols:m,webpack:i,get React(){return p},get ReactDOM(){return a},get filters(){return u}},setTimeout((()=>{document.getElementById("placeholder")&&location.reload()}),1e3);
