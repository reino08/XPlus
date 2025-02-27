// ==UserScript==
// @name        X+ User Lists
// @namespace   X+
// @match       *://twitter.com/*
// @match       *://x.com/*
// @run-at      document-start
// @homepageURL https://github.com/reino08/XPlus
// @downloadURL https://reino08.github.io/XPlus/X+.userlists.user.js
// @grant       GM.xmlHttpRequest
// @grant       unsafeWindow
// ==/UserScript==
var t=[],e=[];!function(r,s){if(r&&"undefined"!=typeof document){var n,i=!0===s.prepend?"prepend":"append",a=!0===s.singleTag,o="string"==typeof s.container?document.querySelector(s.container):document.getElementsByTagName("head")[0];if(a){var c=t.indexOf(o);-1===c&&(c=t.push(o)-1,e[c]={}),n=e[c]&&e[c][i]?e[c][i]:e[c][i]=l()}else n=l();65279===r.charCodeAt(0)&&(r=r.substring(1)),n.styleSheet?n.styleSheet.cssText+=r:n.appendChild(document.createTextNode(r))}function l(){var t=document.createElement("style");if(t.setAttribute("type","text/css"),s.attributes)for(var e=Object.keys(s.attributes),r=0;r<e.length;r++)t.setAttribute(e[r],s.attributes[e[r]]);var n="prepend"===i?"afterbegin":"beforeend";return o.insertAdjacentElement(n,t),t}}(":has(>article .xp-userlists-filter1){outline:2px solid #600}:has(>article .xp-userlists-filter2){background:linear-gradient(#5ca0d240 0 12.5%,#9ed3df40 12.5% 25%,#f4f49340 25% 37.5%,#ffffff40 37.5% 62.5%,#f4f49340 62.5% 75%,#ffb8c540 75% 87.5%,#cc5d7e40 87.5% 100%)}",{});function r(t,e){var r;"number"!=typeof t&&(t=32*(r=t).length);var s=Math.ceil(t/32),n=-1;if(this.m=t=32*s,this.k=e,this.buckets=[],r)for(;++n<s;)this.buckets[n]=r[n];else for(;++n<s;)this.buckets[n]=0;this._locations=[]}function s(t){return 16843009*((t=(858993459&(t-=t>>1&1431655765))+(t>>2&858993459))+(t>>4)&252645135)>>24}function n(t,e){for(var r=2166136261^(e||0),s=0,n=t.length;s<n;++s){var a=t.charCodeAt(s),o=65280&a;o&&(r=i(r^o>>8)),r=i(r^255&a)}return function(t){return t+=t<<13,t^=t>>>7,t+=t<<3,t^=t>>>17,t+=t<<5,4294967295&t}(r)}function i(t){return t+(t<<1)+(t<<4)+(t<<7)+(t<<8)+(t<<24)}r.prototype.locations=function(t){for(var e=this.k,r=this.m,s=this._locations,i=n(t),a=n(t,1576284489),o=i%r,c=0;c<e;++c)s[c]=o<0?o+r:o,o=(o+a)%r;return s},r.prototype.add=function(t){for(var e=this.locations(t+""),r=this.k,s=this.buckets,n=0;n<r;++n)s[Math.floor(e[n]/32)]|=1<<e[n]%32},r.prototype.test=function(t){for(var e=this.locations(t+""),r=this.k,s=this.buckets,n=0;n<r;++n){var i=e[n];if(!(s[Math.floor(i/32)]&1<<i%32))return!1}return!0},r.prototype.size=function(){for(var t=this.buckets,e=0,r=0,n=t.length;r<n;++r)e+=s(t[r]);return-this.m*Math.log(1-e/this.m)/this.k};const[a,o]=["https://github.com/shinigami-eyes/dynamic-filters/raw/refs/heads/main/bloomfilters/bloomfilter_24121100_transphobic.dat","https://github.com/shinigami-eyes/dynamic-filters/raw/refs/heads/main/bloomfilters/bloomfilter_24121100_tfriendly.dat"].map((t=>GM.xmlHttpRequest({url:t,responseType:"arraybuffer"}).then((t=>[new r(new Int32Array(t.response.slice(0,287552)),20),new r(new Int32Array(t.response.slice(287552)),21)]))));var c;c=async t=>{const[e,r]=await a,[s,n]=await o;t.patches.TweetUserPatch.then((i=>i.subscribe(i.post,((i,a,o)=>{let c=i.props.tweet;if(!c)return t.Logger.warn("Missing prop `tweet`",i);let l=c.retweeted_status?.user||c.user;if(!l)return;const f="twitter.com/"+l.screen_name.toLowerCase(),u=e.test(f)||r.test(f+"|1"),h=s.test(f)||n.test(f+"|1");(u||h)&&(o.props.children=t.React.Children.toArray(o.props.children).concat(u?t.React.createElement("span",{className:"xp-userlists-filter1"}):null,h?t.React.createElement("span",{className:"xp-userlists-filter2"}):null))}),-200)))},(unsafeWindow[Symbol.for("X+ Addons 0")]||=[]).push(c);
