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
// @grant       GM_addElement
// @grant       unsafeWindow
// ==/UserScript==
var e=[],t=[];!function(r,n){if(r&&"undefined"!=typeof document){var o,i=!0===n.prepend?"prepend":"append",s=!0===n.singleTag,l="string"==typeof n.container?document.querySelector(n.container):document.getElementsByTagName("head")[0];if(s){var a=e.indexOf(l);-1===a&&(a=e.push(l)-1,t[a]={}),o=t[a]&&t[a][i]?t[a][i]:t[a][i]=p()}else o=p();65279===r.charCodeAt(0)&&(r=r.substring(1)),o.styleSheet?o.styleSheet.cssText+=r:o.appendChild(document.createTextNode(r))}function p(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),n.attributes)for(var t=Object.keys(n.attributes),r=0;r<t.length;r++)e.setAttribute(t[r],n.attributes[t[r]]);var o="prepend"===i?"afterbegin":"beforeend";return l.insertAdjacentElement(o,e),e}}('.xp-userinfo-container{display:flex;flex-wrap:wrap;width:fit-content}.xp-userinfo-child{background-color:#202327;border-radius:4px;font-family:TwitterChirp;font-size:11px;margin-left:4px;padding:2px 4px;text-decoration:none}.xp-rich-text-editor{line-height:0px}.xp-rich-text-editor>button{background-color:transparent;border:1px solid #444;font-size:14px;margin-right:2px;padding:0 2px}.xp-quote-count{color:#71767b;flex:1;font-family:TwitterChirp;font-size:13px;line-height:20px;margin:auto;text-decoration:none}.xp-quote-count:before{content:"Q ";font-size:16px;vertical-align:bottom}.xp-filtered{align-self:center;color:#b8babd;font-family:TwitterChirp;font-size:15px;margin-left:4px}#xp-ui-root{backdrop-filter:blur(6px);border:0;height:100%;left:0;position:fixed;top:0;width:100%}',{});var r="webpackChunk_twitter_responsive_web",n={ID:"32pL5BWe9WKeSK1MoPvFQQ",Features:"&features=%7B%22hidden_profile_subscriptions_enabled%22%3Atrue%2C%22profile_label_improvements_pcf_label_in_post_enabled%22%3Atrue%2C%22rweb_tipjar_consumption_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22subscriptions_verification_info_is_identity_verified_enabled%22%3Atrue%2C%22subscriptions_verification_info_verified_since_enabled%22%3Atrue%2C%22highlights_tweets_tab_ui_enabled%22%3Atrue%2C%22responsive_web_twitter_article_notes_tab_enabled%22%3Atrue%2C%22subscriptions_feature_can_gift_premium%22%3Atrue%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%7D&fieldToggles=%7B%22withAuxiliaryUserLabels%22%3Afalse%7D"},o={ID:"o5eNLkJb03ayTQa97Cpp7w",Features:"&features=%7B%22profile_label_improvements_pcf_label_in_post_enabled%22%3Atrue%2C%22rweb_tipjar_consumption_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22premium_content_api_read_enabled%22%3Afalse%2C%22communities_web_enable_tweet_community_results_fetch%22%3Atrue%2C%22c9s_tweet_anatomy_moderator_badge_enabled%22%3Atrue%2C%22responsive_web_grok_analyze_button_fetch_trends_enabled%22%3Afalse%2C%22responsive_web_grok_analyze_post_followups_enabled%22%3Atrue%2C%22responsive_web_jetfuel_frame%22%3Afalse%2C%22responsive_web_grok_share_attachment_enabled%22%3Atrue%2C%22articles_preview_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22responsive_web_grok_analysis_button_from_backend%22%3Atrue%2C%22creator_subscriptions_quote_tweet_preview_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22rweb_video_timestamps_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22responsive_web_grok_image_annotation_enabled%22%3Atrue%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D"};const i=["%cX+","padding: 0px 2px"];class s{static{this.log=console.log.bind(window,...i)}static{this.warn=console.warn.bind(window,...i)}static{this.error=console.error.bind(window,...i)}}class l{static{this.listeners=new Set}static get(e){return new Promise((t=>{let r=(n,o)=>{e(n,o)&&(t(n),l.listeners.delete(r))};l.listeners.add(r)}))}static getID(e){let t=l.loader?.c[e];return t?Promise.resolve(t):l.get((t=>e==t))}static getString(e,t){let r=r=>{const n=t(r);return n?.toString==("string"==typeof n?String.prototype.toString:String.toString)&&n.toString().includes(e)};if(l.loader?.c){let t=Object.values(l.loader?.c).map((e=>e.exports)).filter(r);return 1!=t.length?(s.warn(`${t.length} results from string search: "${e}"`,t),Promise.reject(t.length)):Promise.resolve(t[0])}return l.get(r)}static getProps(e,...t){let r=r=>{let n=e(r);return!!n&&t.some((e=>n[e]))};if(l.loader?.c){let e=Object.values(l.loader?.c).map((e=>e.exports)).filter(r);return 1!=e.length?(s.warn(`${e.length} results from prop search: "${t}"`,e),Promise.reject(e.length)):Promise.resolve(e[0])}return l.get(r)}}function a(e,t){const[,r]=t;for(const e in r){const t=Number(e),n=r[t];r[t]=(...e)=>{let[r,o,i]=e;try{n.apply(null,e),r.exports instanceof Object&&Object.defineProperty(r.exports,"__xp_module",{get:()=>n});for(let e of[...l.listeners])e(r.exports,t)}catch(e){s.error(e)}finally{i.m[t]=n}},r[t].toString=()=>n.toString()}return e.webpackPush(t)}!function(){let e=Object.defineProperty;Object.defineProperty=function(t,r,n){return(n.get||n.set)&&(n.configurable=!0),e.call(this,t,r,n)}}(),Object.defineProperty(unsafeWindow,r,{set(e){delete unsafeWindow[r],unsafeWindow[r]=e,Object.defineProperty(e,"push",{get:()=>Array.prototype.push,set:t=>{e.webpackPush=t,Object.defineProperty(e,"push",{value:a.bind(this,e)}),e.push([["X+"],{},e=>l.loader=e])}})}});const p=l.getProps((e=>e),"createElement"),c=l.getProps((e=>e),"createRoot"),d=l.getString("link",(e=>e?.e)),u=l.getString("Bearer",(e=>e?.__xp_module)),_=l.getString("tweet:e.tweet",(e=>e?.ZP?.render)),f=l.getString("_getUserScreenNameNode",(e=>e?.Z)),h=l.getString("_useUserHoverCardWrapper",(e=>e?.Z?.prototype?.render)),b=l.getString("isSuperFollowing",(e=>e?.Z?.prototype?.render)),g=l.getProps((e=>e?.Z),"ActionLike"),m=l.getString("_viewCountsPublicVisibilityEnabled",(e=>e?.__xp_module)),w=l.getString("joinDate",(e=>e?.Z?.type)),y=l.getString("_handleEditorContainerRef",(e=>e?.prototype?.render)),x=l.getString("amountOfTime",(e=>e?.Z)),v=l.getString("_handleCopyVideoAddress",(e=>e?.Z?.prototype?.render)),C=l.get((e=>e?.HWCard)),A=l.getProps((e=>e?.default?.WrappedComponent?.type?.WrappedComponent?.type?.render?.()?.props?.wrappedComponent?.WrappedComponent?.prototype),"_shouldIncludeTweetAppealOption"),k=l.getString("wideMode",(e=>e?.ZP)),P=l.getString("showHasNewItemsIndicator",(e=>e?.ZP));var S=Object.freeze({__proto__:null,extern_ActionBar:g,extern_ActionBarParent:m,extern_ContextMenu:A,extern_DraftJSEditor:y,extern_FollowButton:b,extern_JoinDate:w,extern_Link:d,extern_Poll:C,extern_React:p,extern_ReactDOM:c,extern_Sidebar:k,extern_SidebarButton:P,extern_Timestamp:x,extern_Tweet:_,extern_TweetUser:f,extern_UserCard:h,extern_UserData:u,extern_VideoPlayer:v});let O,E,T;Promise.all([p.then((e=>O=e)),c.then((e=>E=e)),d.then((e=>T=e.e))]);const j=Symbol("isProxy");var W=Object.freeze({__proto__:null,isProxy:j});function D(e,t,r,n){!function(e,t,r){let n=e?.[t];n instanceof Object&&!n[j]&&Object.defineProperty(e,t,{value:new Proxy(e[t],{apply:r,get:(e,t,r)=>t==j||Reflect.get(e,t,r)})})}(e,t,((e,t,o)=>{if(r){let e={};if(r(t,o,e),void 0!==e.value)return e.value;void 0!==e.args&&(o=e.args)}let i=Reflect.apply(e,t,o);if(n){let e=n(t,o,i);if(Array.isArray(e))return e[0]}return i}))}class M{constructor(e,t){this.pre=[],this.post=[],D(e,t,B.bind(this),F.bind(this))}subscribe(e,t,r){if(r){t.priority=r;for(let n=0;n<e.length;n++){let o=e[n].priority||0;if(r>o)return void e.splice(n,0,t);r==o&&Number.isFinite(r)&&s.warn(`Two patches have the same priority (${r}):`,t,e[n])}}e.push(t)}}function B(e,t,r){for(let n in this.pre)try{if(this.pre[n](e,t,r),r.value)return;r.args&&(t=r.args)}catch(e){s.error("Exception occurred in pre patch:",e,"Patch list:",this.pre),delete this.pre[n]}}function F(e,t,r){for(let n in this.post)try{let o=this.post[n](e,t,r);Array.isArray(o)&&1==o.length&&(r=o[0])}catch(e){s.error("Exception occurred in post patch:",e,"Patch list:",this.post),delete this.post[n]}}let $=[],N=[];function I(){GM.setValue("xp-follow-list",$.join("\n"));try{N.forEach((e=>e()))}catch(e){s.warn("Error while running follow list change callback:",e)}}GM.getValue("xp-follow-list").then((e=>{e&&($=e.split("\n").filter((e=>0!=e.trim().length)))})),b.then((e=>{D(e.Z.prototype,"render",void 0,((e,t,r)=>{let n=r.props.onFollow,o=r.props.onUnfollow;r.props.onFollow=function(){return-1==$.indexOf(r.props.name)&&($.push(r.props.name),I()),n.apply(this,arguments)},r.props.onUnfollow=function(){let e=$.indexOf(r.props.name);return-1!=e&&($.splice(e,1),I()),o.apply(this,arguments)}}))}));let Z,q={};function U(e,t){q[e]=t}function R(e,...t){Z.contentWindow.postMessage([e,...t],"*")}window.addEventListener("message",(e=>{if("https://local.host:3000"!=e.origin&&"https://reino08.github.io"!=e.origin)return;if(!Array.isArray(e.data)||e.data.length<1)return;let[t,...r]=e.data;q[t]?.(...r)}));let L=[];function z(e){const t=[];return[e.split("\n").map((e=>e.trim())).filter((e=>e&&!e.startsWith("#"))).map((e=>"/"!=e.charAt(0)?[e.charAt(0),e.substring(1)]:["",e])).map((([e,t])=>[e,t.split("#")[0].trim(),t.split("#").slice(1).join("#").trim()])).map((([e,r,n])=>{let o;try{o=new RegExp(r.substring(r.indexOf("/")+1,r.lastIndexOf("/")),r.substring(r.lastIndexOf("/")+1))}catch(e){t.push(e)}return[e,o,n]})).filter((([,e])=>e)),t]}GM.getValue("xp-filters").then((e=>{let t,r=e;r&&([L,t]=z(r)),U("filters.get",(()=>{R("filters.set",r),t&&R("filters.compiled",t)}))})),U("filters.set",(e=>{let t;GM.setValue("xp-filters",e),[L,t]=z(e),R("filters.compiled",t)}));const V=_.then((e=>new M(e.ZP.render({}).props.children.type.prototype,"render")));function G(e,t,r,n){let o;for(let n=0;n<(r||1/0)&&e?.return&&!(o=t(e));n++)e=e.return;return o||void(n||s.warn("Failed to find prop in tree. Accessor:",t))}function X(e,t,r){return T(r,(r=>{let n=r(e);return n.style={...n.style[1],...n.style[0]},O.createElement("a",n,t)}))}V.then((e=>e.subscribe(e.pre,((e,t,r)=>{e.filterChecked||(e.filterChecked=!0,e.filterReason=function(e){if(e.user.following||e.user.followed_by)return;for(let[t,r,n]of L){if(("n"==t||""==t)&&-1!=e.user.name.search(r))return`Name (${n||"Unspecified"})`;if(("b"==t||""==t)&&-1!=e.user.description.search(r))return`Bio (${n||"Unspecified"})`}return null}(e.props.tweet)),e.filterReason&&(r.value=O.createElement("div",{className:"xp-filtered",onClick:()=>(delete e.filterReason,e.forceUpdate())},`Filtered: ${e.filterReason}`))}))));const H=f.then((e=>new M(e.Z.prototype,"render")));H.then((e=>e.subscribe(e.post,(e=>{e.props.tweet=G(e._reactInternals,(e=>e.stateNode?.props?.tweet))}),1/0))),H.then((e=>e.subscribe(e.post,((e,t,r)=>{let n,o=G(e._reactInternals,(e=>e.stateNode?.props?.tweet));if(!o)return r;o.source_name&&(n=o.source_name.replace(/Twitter for/,"").replace(/Twitter Web App/,"Web").replace(/Twitter Web Client/,"Web Client").replace(/TweetDeck Web App/,"TweetDeck"));let i=r.props.children.props.children.props.children[1].props;i.children=O.Children.toArray(i.children).concat(X({style:{color:"#b8babd",marginLeft:"4px",fontFamily:"TwitterChirp",fontSize:"15px",lineHeight:"20px",verticalAlign:"middle",textDecoration:"none",minWidth:"content-fit",flex:"1"}},n||"Unknown",o.source_url||"/"))})))),m.then((e=>{let t=e.Z.WrappedComponent.type.WrappedComponent.type,r=t.render;t.render=function(){let e=r.apply(this,arguments);return D(e.props.wrappedComponent.WrappedComponent.prototype,"render",void 0,((e,t,r)=>{let n=r.props.children[1].props;n.retweetCount=e.props.tweet.retweet_count,n.quoteCount=e.props.tweet.quote_count})),t.render=r,e}})),g.then((e=>{D(e,"Z",void 0,((e,[t],r)=>{if(t.quoteCount+t.retweetCount==0)return;r.props.children.props.children.splice(2,0,X({className:"xp-quote-count"},t.quoteCount,`/${t.tweetLink}/quotes`))}))})),window.dayjs.extend(window.dayjs_plugin_relativeTime),w.then((e=>{D(e.Z,"type",void 0,((e,t,r)=>{r?.props?.children&&(r.props.children=`Joined ${new Date(t[0].joinDate).toLocaleString()} (${window.dayjs(t[0].joinDate).fromNow()})`)}))}));const K={a:"а",A:"А",b:"ᖯ",B:"Β",c:"с",C:"Ϲ",d:"ԁ",D:"Ꭰ",e:"е",E:"ⴹ",f:"ẝ",F:"ꓝ",g:"ɡ",G:"Ꮐ",h:"һ",H:"Η",i:"і",I:"Ɩ",j:"ј",J:"Ϳ",k:void 0,K:"К",l:"ӏ",L:"Ꮮ",m:"ⅿ",M:"M",n:"ո",N:"Ν",o:"о",O:"О",p:"р",P:"Ρ",q:"ԛ",Q:"ⵕ",r:"г",R:"ꓣ",s:"ꜱ",S:"Ѕ",t:void 0,T:"Τ",u:"ս",U:"Ս",v:"ᴠ",V:"⋁",w:"ᴡ",W:"Ԝ",x:"х",X:"Χ",y:"у",Y:"Υ",z:"ᴢ",Z:"Ζ"},J=Object.entries(K).reduce(((e,[t,r])=>(e[r]=t,e)),{}),Q=[["B",[[97,122,119834],[65,90,119808]]],["I",[[97,122,119886],[65,90,119860]]],["BI",[[97,122,119938],[65,90,119912]]],["DS",[[97,122,120146],[65,90,120120,[2,7,13,15,16,17,25]]]]];y.then((e=>{D(e.prototype,"render",void 0,((e,t,r)=>{function n(e){let t;if(t=J[e])return t;let r=e.codePointAt(0);if(!r)return e;for(let e of Q)for(let[t,n,o]of e[1])if(r>=o&&r<=o+n-t)return String.fromCodePoint(r-o+t);return e}function o(t){e.props.handlePastedText(Array.from(function(){let t=e.props.editorState.getSelection(),r=t.getStartOffset(),n=t.getEndOffset(),o=e.props.editorState.getCurrentContent().getBlockForKey(t.getAnchorKey()).getText();return r==n?"":o.slice(r,n)}()).map(t).join(""),"",e.props.editorState)}r.props.children.unshift(O.createElement("div",{className:"xp-rich-text-editor",onMouseDown:e=>e.preventDefault()},O.createElement("button",{onClick:()=>o((e=>n(e)))},"R"),O.createElement("button",{onClick:()=>{return e=K,void o((t=>{let r=n(t);return e[r]||r}));var e}},"C"),Q.map((([e,t])=>O.createElement("button",{onClick:()=>function(e){o((t=>{let r=n(t).codePointAt(0);if(!r)return t;for(let[t,n,o,i]of e)if(!(r<t||r>n||i&&i.includes(r-t)))return String.fromCodePoint(r+o-t);return t}))}(t)},e)))))}))})),x.then((e=>{D(e.Z.prototype,"render",void 0,((e,t,r)=>{r.props.children[1].props.onClick=()=>{let t=prompt("Enter observed time in hours:");if(!t)return;let r=(parseInt(t)-new Date(e.props.timestamp).getUTCHours())%24;r<-12&&(r+=24),r>14&&(r-=24),alert(0==r?"UTC":r>0?`UTC+${r}`:`UTC${r}`)}}))}));const Y=h.then((e=>new M(e.Z.prototype,"render")));function ee(e,t){if(e||t)return"xp-user-"+(e&&t?"mutual":e?"followed":"follower")}function te(e,t,r,n){let o=Math.abs(r)||0;return t&&1!=o&&(e+="s"),[{className:"xp-userinfo-child",style:{color:r<n?"#FFF":"#71767B"}},`${o} ${e}`]}function re(e,t){t&&e(t)}function ne(e){let t,r=e.props.playerState.tracks.flatMap((e=>e.variants)).filter((e=>"video/mp4"==e.type));for(let e of r)(t?.bitrate||0<e.bitrate)&&(t=e);if(t)return t.src;s.warn("Failed to get download url for video:",e.props.playerState)}H.then((e=>e.subscribe(e.post,((e,t,r)=>{let n=e.props.tweet;if(!n)return s.warn("Missing prop `tweet`",e);let o=n.retweeted_status?.user||n.user;if(!o)return;let i=ee(o.following,o.followed_by);i&&(r.props.children=O.Children.toArray(r.props.children).concat(O.createElement("span",{className:i})))}),-100))),Y.then((e=>e.subscribe(e.post,((e,t,r)=>{let n=G(e._reactInternals,(e=>e?.stateNode?.props?.hasOwnProperty("isFollowing")&&e.stateNode.props||void 0),void 0,!0);if(!n)return;let o=ee(n.isFollowing,n.isFollowedBy);o&&r.props.children.props.children.unshift(O.createElement("span",{className:o}))}),-100))),Y.then((e=>e.subscribe(e.post,((e,t,r)=>{let n=G(e._reactInternals,(e=>e.pendingProps.user),25,!0);if(!n)return;let o=[O.createElement("span",...te("like",!0,n.favourites_count,100)),O.createElement("span",...te("post",!0,n.statuses_count,10)),O.createElement("span",...te("media",!1,n.media_count,5)),X(...te("list",!0,-(n.listed_count||0),0),`/${n.screen_name}/lists/memberships`)];r.props.children.props.children.push(O.createElement("div",{className:"xp-userinfo-container"},o))})))),v.then((e=>{D(e.Z.prototype,"render",void 0,((e,t,r)=>{e.state.openContextMenu&&D(r.props,"children",void 0,((t,r,n)=>{let o=n.props.children[1].props,i=[O.createElement(o.children.type,{actionText:"Copy download link",onClick:()=>re(navigator.clipboard.writeText.bind(navigator.clipboard),ne(e)),withBottomBorder:!1}),O.createElement(o.children.type,{actionText:"Open video source",onClick:()=>re(window.open,ne(e)),withBottomBorder:!1})];o.children=O.Children.toArray(o.children).concat(i)}))}))})),A.then((e=>{D(e.default.WrappedComponent.type.WrappedComponent.type.render().props.wrappedComponent.WrappedComponent.prototype,"render",(e=>{D(e,"_getActionItems",void 0,((t,r,n)=>{n[0].push({text:"View community notes",link:"/i/birdwatch/t/"+e.props.tweet.id_str})}))}))})),C.then((e=>{D(e.HWCard.prototype,"render",(e=>{e.props.card.binding_values[j]||(e.props.card.binding_values=new Proxy(e.props.card.binding_values,{get(e,t,r){if(t==j)return!0;let n=Reflect.get(e,t,r);if(!n||"string"!=typeof t||!t.endsWith("_label"))return n;let o=t.substring(0,8)+"count";return new Proxy(n,{get(t,r,n){let i=Reflect.get(t,r,n);return"string_value"!=r?i:`${i} (${e[o]?.string_value||"0"})`}})}}))}))}));const oe=k.then((e=>new M(e,"ZP")));var ie,se=Object.freeze({__proto__:null,SidebarPatch:oe,TweetPatch:V,TweetUserPatch:H,UserCardPatch:Y});!function(e){e[e.Loading=0]="Loading",e[e.Succeeded=1]="Succeeded",e[e.Failed=2]="Failed"}(ie||(ie={}));const le={};for(const[e,t]of Object.entries(S).map((([e,t])=>[e.substring(7),t])))le[e]=0,t.then((()=>le[e]=1),(()=>le[e]=2));function ae({user:e,element:t}){return O.useEffect((()=>{t.children[0].click()})),X({},"","/"+e)}let pe,ce;U("debug.externs.get",(()=>R("debug.externs.set",le))),N.push((()=>{R("follow_list.set",$)})),U("follow_list.get",(()=>{R("follow_list.set",$)})),U("follow_list.open",(e=>{let t=document.createElement("div");E.createRoot(t).render(O.createElement(ae,{user:e,element:t}))})),P.then((e=>ce=e.ZP)),oe.then((e=>e.subscribe(e.post,((e,t,r)=>{if(!ce)return;if(t[0].xpAdded)return;t[0].xpAdded=!0;let n=r.props.children.props.children;n.splice(n.length-2,0,O.createElement(ce,{"aria-label":"Open X+ Menu",label:"Open Menu",layout:"vertical",rank:0,onClick(e){e.preventDefault(),pe.style.display=""},renderIcon:()=>O.createElement("div",{style:{width:"24px",height:"24px",fontSize:"24px",fontFamily:"TwitterChirp",lineHeight:"24px"}},"X+"),withLabel:r.props.children.props.children[0].props.withLabel}))})))),window.addEventListener("load",(()=>{pe=GM_addElement(document.body,"iframe",{id:"xp-ui-root",src:"https://reino08.github.io/XPlus"}),pe.style.display="none",Z=pe,U("menu.hide",(()=>pe.style.display="none"))}));let de=[];function ue(){GM.setValue("xp-hidden-tabs",de.join("\n"))}function _e(){R("hidden_tabs.set",de.join("\n"))}function fe(e){de=e.split("\n").map((e=>e.trim())).filter((e=>e))}function he({child:e}){let[t,r]=O.useReducer((e=>e+1),0);return D(e.props,"onClick",((t,[n],o)=>{if(n.ctrlKey&&n.altKey){if(n.preventDefault(),o.value=null,"Open X+ Menu"==e.props["aria-label"])return;de.push(e.props.label),ue(),_e(),r()}})),de.includes(e.props.label)?null:e}GM.getValue("xp-hidden-tabs").then((e=>{e&&fe(e),U("hidden_tabs.get",_e),U("hidden_tabs.set",(e=>{fe(e),ue()}))})),oe.then((e=>e.subscribe(e.post,((e,t,r)=>{const n=r.props.children.props,o=n.children.map((e=>O.createElement(he,{child:e},null)));n.children=o}),-1e4)));let be,ge=!1;l.getProps((e=>e?.default),"theme").then((e=>{e.default.onThemeChange((e=>{ge&&(ge=!1,R("theme.set",be=e.colors[e.primaryColorName]))})),U("theme.get",(()=>R("theme.set",be))),GM.getValue("xp-theme").then((t=>{setTimeout((()=>{ge=!0,e.default.setPrimaryColor(t)}),1e3)})),U("theme_picker.data.get",(()=>R("tab.theme_picker.data.set",e.default.theme.colors))),U("theme_picker.current.set",(t=>{ge=!0,e.default.setPrimaryColor(t),GM.setValue("xp-theme",t)}))}));const me="https://x.com/i/api/graphql/";let we;GM.getValue("xp-trackers").then((e=>{we=e||[],U("trackers.get",(()=>R("trackers.set",we)))})),U("trackers.set",(e=>GM.setValue("xp-trackers",we=e))),u.then((e=>{const t=Object.values(e).filter((e=>"function"==typeof e&&e.toString().includes("Bearer")))[0](!1);let r=document.cookie.substring(document.cookie.indexOf("ct0=")+4),i=r.indexOf(";");-1!=i&&(r=r.substring(0,i));const s={Authorization:t,"X-Csrf-Token":r,credentials:"same-origin"};U("trackers.resolve",(async e=>{let t=await fetch(`${me}${n.ID}/UserByScreenName?variables=%7B%22screen_name%22%3A%22${e}%22%7D${n.Features}`,{headers:s}),r=(await t.json()).data.user.result.rest_id,i=await fetch(`${me}${o.ID}/Following?variables=%7B%22userId%22%3A%22${r}%22%2C%22count%22%3A20%2C%22includePromotedContent%22%3Afalse%7D${o.Features}`,{headers:s}),l=await i.text(),a=l.indexOf("screen_name");return-1==a?R("tracker.resolve.fail",!1):(l=l.substring(a+14),-1!=l.indexOf("screen_name")?R("tracker.resolve.fail",!0):void R("tracker.resolved",e,l.substring(0,l.indexOf('"'))))}))}));const ye={symbols:W,externs:S,patches:se,Logger:s,Webpack:l,get React(){return O},get ReactDOM(){return E}};Object.defineProperty(unsafeWindow,Symbol.for("X+"),{configurable:!1,enumerable:!1,writable:!1,value:ye}),function(e){const t=Symbol.for("X+ Addons 0");let r=unsafeWindow[t];if(r)for(const t of r)t(e);else r=unsafeWindow[t]=[];const n=r.push;r.push=function(t){return t(e),n.apply(this,arguments)}}(ye),setTimeout((()=>{document.getElementById("placeholder")&&location.reload()}),1e3);
