var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var l,o=!0===r.prepend?"prepend":"append",i=!0===r.singleTag,a="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(i){var u=e.indexOf(a);-1===u&&(u=e.push(a)-1,t[u]={}),l=t[u]&&t[u][o]?t[u][o]:t[u][o]=s()}else l=s();65279===n.charCodeAt(0)&&(n=n.substring(1)),l.styleSheet?l.styleSheet.cssText+=n:l.appendChild(document.createTextNode(n))}function s(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var l="prepend"===o?"afterbegin":"beforeend";return a.insertAdjacentElement(l,e),e}}n("*{font-family:sans-serif;font-size:15px}.tab,button{background-color:#000;border:1px solid var(--xp-accent);border-radius:8px;color:#fff;padding:6px 12px;text-align:inherit}button:hover{background-color:#222}input,textarea{background-color:#111;border-radius:16px;color:#fff}",{});var r=!1,l=Array.isArray,o=Array.prototype.indexOf,i=Array.from,a=Object.defineProperty,u=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyDescriptors,f=Object.prototype,c=Array.prototype,v=Object.getPrototypeOf;function d(e){return e()}function p(e){for(var t=0;t<e.length;t++)e[t]()}const h=2,g=4,m=8,b=16,y=32,x=64,w=128,_=256,k=512,E=1024,j=2048,O=4096,S=8192,P=16384,A=32768,T=65536,z=1<<19,N=1<<20,q=Symbol("$state"),C=Symbol("");function L(e){return e===this.v}function M(e){return t=e,n=this.v,!(t!=t?n==n:t!==n||null!==t&&"object"==typeof t||"function"==typeof t);var t,n}let D=!1,$=!1;const R=1,W=2,F=4,I=8,V=16,B=Symbol();let H=null;function K(e){H=e}function U(e,t=!1,n){H={p:H,c:null,e:null,m:!1,s:e,x:null,l:null},D&&!t&&(H.l={s:null,u:null,r1:[],r2:J(!1)})}function X(e){const t=H;if(null!==t){const e=t.e;if(null!==e){var n=et,r=Qe;t.e=null;try{for(var l=0;l<e.length;l++){var o=e[l];tt(o.effect),Ze(o.reaction),we(o.fn)}}finally{tt(n),Ze(r)}}H=t.p,t.m=!0}return{}}function G(){return!D||null!==H&&null===H.l}function J(e,t){return{f:0,v:e,reactions:null,equals:L,rv:0,wv:0}}function Q(e){return function(e){null!==Qe&&!Ye&&Qe.f&h&&(null===nt?nt=[e]:nt.push(e));return e}(J(e))}function Y(e,t=!1){const n=J(e);return t||(n.equals=M),D&&null!==H&&null!==H.l&&(H.l.s??=[]).push(n),n}function Z(e,t){return null!==Qe&&!Ye&&G()&&Qe.f&(h|b)&&(null===nt||!nt.includes(e))&&function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),ee(e,t)}function ee(e,t){return e.equals(t)||(e.v,e.v=t,e.wv=st(),te(e,j),G()&&null!==et&&et.f&E&&!(et.f&(y|x))&&(null===ot?function(e){ot=e}([e]):ot.push(e))),t}function te(e,t){var n=e.reactions;if(null!==n)for(var r=G(),l=n.length,o=0;o<l;o++){var i=n[o],a=i.f;a&j||(r||i!==et)&&(St(i,t),a&(E|_)&&(a&h?te(i,O):wt(i)))}}let ne=!1;function re(e,t=null,n){if("object"!=typeof e||null===e||q in e)return e;const r=v(e);if(r!==f&&r!==c)return e;var o,i=new Map,a=l(e),s=J(0);return a&&i.set("length",J(e.length)),new Proxy(e,{defineProperty(e,t,n){"value"in n&&!1!==n.configurable&&!1!==n.enumerable&&!1!==n.writable||function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}();var r=i.get(t);return void 0===r?(r=J(n.value),i.set(t,r)):Z(r,re(n.value,o)),!0},deleteProperty(e,t){var n=i.get(t);if(void 0===n)t in e&&i.set(t,J(B));else{if(a&&"string"==typeof t){var r=i.get("length"),l=Number(t);Number.isInteger(l)&&l<r.v&&Z(r,l)}Z(n,B),le(s)}return!0},get(t,n,r){if(n===q)return e;var l=i.get(n),a=n in t;if(void 0!==l||a&&!u(t,n)?.writable||(l=J(re(a?t[n]:B,o)),i.set(n,l)),void 0!==l){var s=Et(l);return s===B?void 0:s}return Reflect.get(t,n,r)},getOwnPropertyDescriptor(e,t){var n=Reflect.getOwnPropertyDescriptor(e,t);if(n&&"value"in n){var r=i.get(t);r&&(n.value=Et(r))}else if(void 0===n){var l=i.get(t),o=l?.v;if(void 0!==l&&o!==B)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return n},has(e,t){if(t===q)return!0;var n=i.get(t),r=void 0!==n&&n.v!==B||Reflect.has(e,t);if((void 0!==n||null!==et&&(!r||u(e,t)?.writable))&&(void 0===n&&(n=J(r?re(e[t],o):B),i.set(t,n)),Et(n)===B))return!1;return r},set(e,t,n,r){var l=i.get(t),f=t in e;if(a&&"length"===t)for(var c=n;c<l.v;c+=1){var v=i.get(c+"");void 0!==v?Z(v,B):c in e&&(v=J(B),i.set(c+"",v))}void 0===l?f&&!u(e,t)?.writable||(Z(l=J(void 0),re(n,o)),i.set(t,l)):(f=l.v!==B,Z(l,re(n,o)));var d=Reflect.getOwnPropertyDescriptor(e,t);if(d?.set&&d.set.call(r,n),!f){if(a&&"string"==typeof t){var p=i.get("length"),h=Number(t);Number.isInteger(h)&&h>=p.v&&Z(p,h+1)}le(s)}return!0},ownKeys(e){Et(s);var t=Reflect.ownKeys(e).filter((e=>{var t=i.get(e);return void 0===t||t.v!==B}));for(var[n,r]of i)r.v===B||n in e||t.push(n);return t},setPrototypeOf(){!function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}()}})}function le(e,t=1){Z(e,e.v+t)}var oe,ie,ae;function ue(e=""){return document.createTextNode(e)}function se(e){return ie.call(e)}function fe(e){return ae.call(e)}function ce(e,t){return se(e)}function ve(e,t){var n=se(e);return n instanceof Comment&&""===n.data?fe(n):n}function de(e,t=1,n=!1){let r=e;for(;t--;)r=fe(r);return r}function pe(e){var t=h|j,n=null!==Qe&&Qe.f&h?Qe:null;null===et||null!==n&&n.f&_?t|=_:et.f|=N;return{ctx:H,deps:null,effects:null,equals:L,f:t,fn:e,reactions:null,rv:0,v:null,wv:0,parent:n??et}}function he(e){var t=e.effects;if(null!==t){e.effects=null;for(var n=0;n<t.length;n+=1)Pe(t[n])}}function ge(e){var t,n=et;tt(function(e){for(var t=e.parent;null!==t;){if(!(t.f&h))return t;t=t.parent}return null}(e));try{he(e),t=dt(e)}finally{tt(n)}return t}function me(e){var t=ge(e);St(e,(ut||e.f&_)&&null!==e.deps?O:E),e.equals(t)||(e.v=t,e.wv=st())}function be(e){null===et&&null===Qe&&function(e){throw new Error("https://svelte.dev/e/effect_orphan")}(),null!==Qe&&Qe.f&_&&null===et&&function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}(),Ke&&function(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}()}function ye(e,t,n,r=!0){var l=!!(e&x),o=et,i={ctx:H,deps:null,nodes_start:null,nodes_end:null,f:e|j,first:null,fn:t,last:null,next:null,parent:l?null:o,prev:null,teardown:null,transitions:null,wv:0};if(n){var a=He;try{Ue(!0),gt(i),i.f|=A}catch(e){throw Pe(i),e}finally{Ue(a)}}else null!==t&&wt(i);if(!(n&&null===i.deps&&null===i.first&&null===i.nodes_start&&null===i.teardown&&!(i.f&(N|w)))&&!l&&r&&(null!==o&&function(e,t){var n=t.last;null===n?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}(i,o),null!==Qe&&Qe.f&h)){var u=Qe;(u.effects??=[]).push(i)}return i}function xe(e){if(be(),!(null!==et&&!!(et.f&y)&&null!==H&&!H.m))return we(e);var t=H;(t.e??=[]).push({fn:e,effect:et,reaction:Qe})}function we(e){return ye(g,e,!1)}function _e(e){return ye(m,e,!0)}function ke(e,t=[],n=pe){const r=t.map(n);return Ee((()=>e(...r.map(Et))))}function Ee(e,t=0){return ye(m|b|t,e,!0)}function je(e,t=!0){return ye(m|y,e,!0,t)}function Oe(e){var t=e.teardown;if(null!==t){const e=Ke,n=Qe;Xe(!0),Ze(null);try{t.call(null)}finally{Xe(e),Ze(n)}}}function Se(e,t=!1){var n=e.first;for(e.first=e.last=null;null!==n;){var r=n.next;Pe(n,t),n=r}}function Pe(e,t=!0){var n=!1;if((t||e.f&z)&&null!==e.nodes_start){for(var r=e.nodes_start,l=e.nodes_end;null!==r;){var o=r===l?null:fe(r);r.remove(),r=o}n=!0}Se(e,t&&!n),ht(e,0),St(e,P);var i=e.transitions;if(null!==i)for(const e of i)e.stop();Oe(e);var a=e.parent;null!==a&&null!==a.first&&Ae(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Ae(e){var t=e.parent,n=e.prev,r=e.next;null!==n&&(n.next=r),null!==r&&(r.prev=n),null!==t&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Te(e,t){var n=[];Ne(e,n,!0),ze(n,(()=>{Pe(e),t&&t()}))}function ze(e,t){var n=e.length;if(n>0){var r=()=>--n||t();for(var l of e)l.out(r)}else t()}function Ne(e,t,n){if(!(e.f&S)){if(e.f^=S,null!==e.transitions)for(const r of e.transitions)(r.is_global||n)&&t.push(r);for(var r=e.first;null!==r;){var l=r.next;Ne(r,t,!!(!!(r.f&T)||!!(r.f&y))&&n),r=l}}}function qe(e){Ce(e,!0)}function Ce(e,t){if(e.f&S){e.f^=S,e.f&E||(e.f^=E),ft(e)&&(St(e,j),wt(e));for(var n=e.first;null!==n;){var r=n.next;Ce(n,!!(!!(n.f&T)||!!(n.f&y))&&t),n=r}if(null!==e.transitions)for(const n of e.transitions)(n.is_global||t)&&n.in()}}let Le=!1,Me=[];function De(){Le=!1;const e=Me.slice();Me=[],p(e)}function $e(e){Le||(Le=!0,queueMicrotask(De)),Me.push(e)}const Re=0,We=1;let Fe=!1,Ie=Re,Ve=!1,Be=null,He=!1,Ke=!1;function Ue(e){He=e}function Xe(e){Ke=e}let Ge=[],Je=0,Qe=null,Ye=!1;function Ze(e){Qe=e}let et=null;function tt(e){et=e}let nt=null;let rt=null,lt=0,ot=null;let it=1,at=0,ut=!1;function st(){return++it}function ft(e){var t=e.f;if(t&j)return!0;if(t&O){var n=e.deps,r=!!(t&_);if(null!==n){var l,o,i=!!(t&k),a=r&&null!==et&&!ut,u=n.length;if(i||a){for(l=0;l<u;l++)o=n[l],!i&&o?.reactions?.includes(e)||(o.reactions??=[]).push(e);i&&(e.f^=k)}for(l=0;l<u;l++)if(ft(o=n[l])&&me(o),o.wv>e.wv)return!0}r&&(null===et||ut)||St(e,E)}return!1}function ct(e,t,n,r){if(Fe){if(null===n&&(Fe=!1),function(e){return!(e.f&P||null!==e.parent&&e.parent.f&w)}(t))throw e}else null!==n&&(Fe=!0),function(e,t){for(var n=t;null!==n;){if(n.f&w)try{return void n.fn(e)}catch{n.f^=w}n=n.parent}throw Fe=!1,e}(e,t)}function vt(e,t,n=0){var r=e.reactions;if(null!==r)for(var l=0;l<r.length;l++){var o=r[l];o.f&h?vt(o,t,n+1):t===o&&(0===n?St(o,j):o.f&E&&St(o,O),wt(o))}}function dt(e){var t=rt,n=lt,r=ot,l=Qe,o=ut,i=nt,a=H,u=Ye,s=e.f;rt=null,lt=0,ot=null,Qe=s&(y|x)?null:e,ut=!!(s&_)&&(!He||(null===l||u)&&null!==e.parent),nt=null,K(e.ctx),Ye=!1,at++;try{var f=(0,e.fn)(),c=e.deps;if(null!==rt){var v;if(ht(e,lt),null!==c&&lt>0)for(c.length=lt+rt.length,v=0;v<rt.length;v++)c[lt+v]=rt[v];else e.deps=c=rt;if(!ut)for(v=lt;v<c.length;v++)(c[v].reactions??=[]).push(e)}else null!==c&&lt<c.length&&(ht(e,lt),c.length=lt);if(G()&&null!==ot&&!(e.f&(h|O|j)))for(v=0;v<ot.length;v++)vt(ot[v],e);return null!==l&&at++,f}finally{rt=t,lt=n,ot=r,Qe=l,ut=o,nt=i,K(a),Ye=u}}function pt(e,t){let n=t.reactions;if(null!==n){var r=o.call(n,e);if(-1!==r){var l=n.length-1;0===l?n=t.reactions=null:(n[r]=n[l],n.pop())}}null===n&&t.f&h&&(null===rt||!rt.includes(t))&&(St(t,O),t.f&(_|k)||(t.f^=k),he(t),ht(t,0))}function ht(e,t){var n=e.deps;if(null!==n)for(var r=t;r<n.length;r++)pt(e,n[r])}function gt(e){var t=e.f;if(!(t&P)){St(e,E);var n=et,l=H;et=e;try{t&b?function(e){for(var t=e.first;null!==t;){var n=t.next;t.f&y||Pe(t),t=n}}(e):Se(e),Oe(e);var o=dt(e);e.teardown="function"==typeof o?o:null,e.wv=it;e.deps;r&&$&&e.f}catch(t){ct(t,e,n,l||e.ctx)}finally{et=n}}}function mt(){if(Je>1e3){Je=0;try{!function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}()}catch(e){if(null===Be)throw e;ct(e,Be,null)}}Je++}function bt(e){var t=e.length;if(0!==t){mt();var n=He;He=!0;try{for(var r=0;r<t;r++){var l=e[r];l.f&E||(l.f^=E);var o=[];_t(l,o),yt(o)}}finally{He=n}}}function yt(e){var t=e.length;if(0!==t)for(var n=0;n<t;n++){var r=e[n];if(!(r.f&(P|S)))try{ft(r)&&(gt(r),null===r.deps&&null===r.first&&null===r.nodes_start&&(null===r.teardown?Ae(r):r.fn=null))}catch(e){ct(e,r,null,r.ctx)}}}function xt(){if(Ve=!1,Je>1001)return;const e=Ge;Ge=[],bt(e),Ve||(Je=0,Be=null)}function wt(e){Ie===Re&&(Ve||(Ve=!0,queueMicrotask(xt))),Be=e;for(var t=e;null!==t.parent;){var n=(t=t.parent).f;if(n&(x|y)){if(!(n&E))return;t.f^=E}}Ge.push(t)}function _t(e,t){var n=e.first,r=[];e:for(;null!==n;){var l=n.f,o=!!(l&y),i=o&&!!(l&E),a=n.next;if(!(i||l&S))if(l&m){if(o)n.f^=E;else{var u=Qe;try{Qe=n,ft(n)&&gt(n)}catch(e){ct(e,n,null,n.ctx)}finally{Qe=u}}var s=n.first;if(null!==s){n=s;continue}}else l&g&&r.push(n);if(null===a){let t=n.parent;for(;null!==t;){if(e===t)break e;var f=t.next;if(null!==f){n=f;continue e}t=t.parent}}n=a}for(var c=0;c<r.length;c++)s=r[c],t.push(s),_t(s,t)}function kt(e){var t=Ie,n=Ge;try{mt();const t=[];Ie=We,Ge=t,Ve=!1,bt(n);var r=e?.();return Le&&De(),(Ge.length>0||t.length>0)&&kt(),Je=0,Be=null,r}finally{Ie=t,Ge=n}}function Et(e){var t=e.f,n=!!(t&h);if(n&&t&P){var r=ge(e);return function(e){he(e),ht(e,0),St(e,P),e.v=e.deps=e.ctx=e.reactions=null}(e),r}if(null===Qe||Ye){if(n&&null===e.deps&&null===e.effects){var l=e,o=l.parent;null===o||o.f&_||(l.f^=_)}}else{null!==nt&&nt.includes(e)&&function(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}();var i=Qe.deps;e.rv<at&&(e.rv=at,null===rt&&null!==i&&i[lt]===e?lt++:null===rt?rt=[e]:rt.push(e))}return n&&ft(l=e)&&me(l),e.v}function jt(e){var t=Ye;try{return Ye=!0,e()}finally{Ye=t}}const Ot=-7169;function St(e,t){e.f=e.f&Ot|t}function Pt(e,t=new Set){if(!("object"!=typeof e||null===e||e instanceof EventTarget||t.has(e))){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{Pt(e[n],t)}catch(e){}const n=v(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const t=s(n);for(let n in t){const r=t[n].get;if(r)try{r.call(e)}catch(e){}}}}}const At=["touchstart","touchmove"];function Tt(e){return At.includes(e)}let zt=!1;function Nt(e,t,n,r=n){e.addEventListener(t,(()=>function(e){var t=Qe,n=et;Ze(null),tt(null);try{return e()}finally{Ze(t),tt(n)}}(n)));const l=e.__on_r;e.__on_r=l?()=>{l(),r(!0)}:()=>r(!0),zt||(zt=!0,document.addEventListener("reset",(e=>{Promise.resolve().then((()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()}))}),{capture:!0}))}const qt=new Set,Ct=new Set;function Lt(e){for(var t=0;t<e.length;t++)qt.add(e[t]);for(var n of Ct)n(e)}function Mt(e){var t=this,n=t.ownerDocument,r=e.type,o=e.composedPath?.()||[],i=o[0]||e.target,u=0,s=e.__root;if(s){var f=o.indexOf(s);if(-1!==f&&(t===document||t===window))return void(e.__root=t);var c=o.indexOf(t);if(-1===c)return;f<=c&&(u=f)}if((i=o[u]||e.target)!==t){a(e,"currentTarget",{configurable:!0,get:()=>i||n});var v=Qe,d=et;Ze(null),tt(null);try{for(var p,h=[];null!==i;){var g=i.assignedSlot||i.parentNode||i.host||null;try{var m=i["__"+r];if(void 0!==m&&!i.disabled)if(l(m)){var[b,...y]=m;b.apply(i,[e,...y])}else m.call(i,e)}catch(e){p?h.push(e):p=e}if(e.cancelBubble||g===t||null===g)break;i=g}if(p){for(let e of h)queueMicrotask((()=>{throw e}));throw p}}finally{e.__root=t,delete e.currentTarget,Ze(v),tt(d)}}}function Dt(e,t){var n=et;null===n.nodes_start&&(n.nodes_start=e,n.nodes_end=t)}function $t(e,t){var n,r=!!(1&t),l=!!(2&t),o=!e.startsWith("<!>");return()=>{var t,i;void 0===n&&(t=o?e:"<!>"+e,(i=document.createElement("template")).innerHTML=t,n=i.content,r||(n=se(n)));var a=l?document.importNode(n,!0):n.cloneNode(!0);r?Dt(se(a),a.lastChild):Dt(a,a);return a}}function Rt(){var e=document.createDocumentFragment(),t=document.createComment(""),n=ue();return e.append(t,n),Dt(t,n),e}function Wt(e,t){null!==e&&e.before(t)}function Ft(e,t){var n=null==t?"":"object"==typeof t?t+"":t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=null==n?"":n+"")}const It=new Map;let Vt=new WeakMap;const Bt=0,Ht=1,Kt=2;function Ut(e,t,n,r,l){var o,i,a,u=e,s=G(),f=H,c=B,v=(s?J:Y)(void 0),d=(s?J:Y)(void 0),p=!1;function h(e,t){p=!0,t&&(tt(g),Ze(g),K(f));try{e===Bt&&n&&(o?qe(o):o=je((()=>n(u)))),e===Ht&&r&&(i?qe(i):i=je((()=>r(u,v)))),e!==Bt&&o&&Te(o,(()=>o=null)),e!==Ht&&i&&Te(i,(()=>i=null)),e!==Kt&&a&&Te(a,(()=>a=null))}finally{t&&(K(null),Ze(null),tt(null),kt())}}var g=Ee((()=>{if(c!==(c=t())){if(n=c,"function"==typeof n?.then){var e=c;p=!1,e.then((t=>{e===c&&(ee(v,t),h(Ht,!0))}),(t=>{if(e===c)throw ee(d,t),h(Kt,!0),d.v})),$e((()=>{p||h(Bt,!0)}))}else ee(v,c),h(Ht,!1);var n;return()=>c=B}}))}function Xt(e,t,n=!1){var r=e,l=null,o=null,i=B,a=!1;const u=(e,t=!0)=>{a=!0,s(t,e)},s=(e,t)=>{i!==(i=e)&&(i?(l?qe(l):t&&(l=je((()=>t(r)))),o&&Te(o,(()=>{o=null}))):(o?qe(o):t&&(o=je((()=>t(r)))),l&&Te(l,(()=>{l=null}))))};Ee((()=>{a=!1,t(u),a||s(null,null)}),n?T:0)}function Gt(e,t){return t}function Jt(e,t,n,r,o,a=null){var u=e,s={items:new Map,first:null};!(t&F)||(u=e.appendChild(ue()));var f=null,c=!1,v=function(e){const t=pe(e);return t.equals=M,t}((()=>{var e=n();return l(e)?e:null==e?[]:i(e)}));Ee((()=>{var e=Et(v),l=e.length;c&&0===l||(c=0===l,function(e,t,n,r,l,o,a){var u,s,f,c,v,d,p=!!(l&I),h=!!(l&(R|W)),g=e.length,m=t.items,b=t.first,y=b,x=null,w=[],_=[];if(p)for(d=0;d<g;d+=1)c=o(f=e[d],d),void 0!==(v=m.get(c))&&(v.a?.measure(),(s??=new Set).add(v));for(d=0;d<g;d+=1)if(c=o(f=e[d],d),void 0!==(v=m.get(c))){if(h&&Qt(v,f,d,l),v.e.f&S&&(qe(v.e),p&&(v.a?.unfix(),(s??=new Set).delete(v))),v!==y){if(void 0!==u&&u.has(v)){if(w.length<_.length){var k,E=_[0];x=E.prev;var j=w[0],O=w[w.length-1];for(k=0;k<w.length;k+=1)Zt(w[k],E,n);for(k=0;k<_.length;k+=1)u.delete(_[k]);en(t,j.prev,O.next),en(t,x,j),en(t,O,E),y=E,x=O,d-=1,w=[],_=[]}else u.delete(v),Zt(v,y,n),en(t,v.prev,v.next),en(t,v,null===x?t.first:x.next),en(t,x,v),x=v;continue}for(w=[],_=[];null!==y&&y.k!==c;)y.e.f&S||(u??=new Set).add(y),_.push(y),y=y.next;if(null===y)continue;v=y}w.push(v),x=v,y=v.next}else{x=Yt(y?y.e.nodes_start:n,t,x,null===x?t.first:x.next,f,c,d,r,l,a),m.set(c,x),w=[],_=[],y=x.next}if(null!==y||void 0!==u){for(var P=void 0===u?[]:i(u);null!==y;)y.e.f&S||P.push(y),y=y.next;var A=P.length;if(A>0){var T=l&F&&0===g?n:null;if(p){for(d=0;d<A;d+=1)P[d].a?.measure();for(d=0;d<A;d+=1)P[d].a?.fix()}!function(e,t,n,r){for(var l=[],o=t.length,i=0;i<o;i++)Ne(t[i].e,l,!0);var a=o>0&&0===l.length&&null!==n;if(a){var u=n.parentNode;u.textContent="",u.append(n),r.clear(),en(e,t[0].prev,t[o-1].next)}ze(l,(()=>{for(var n=0;n<o;n++){var l=t[n];a||(r.delete(l.k),en(e,l.prev,l.next)),Pe(l.e,!a)}}))}(t,P,T,m)}}p&&$e((()=>{if(void 0!==s)for(v of s)v.a?.apply()}));et.first=t.first&&t.first.e,et.last=x&&x.e}(e,s,u,o,t,r,n),null!==a&&(0===l?f?qe(f):f=je((()=>a(u))):null!==f&&Te(f,(()=>{f=null}))),Et(v))}))}function Qt(e,t,n,r){r&R&&ee(e.v,t),r&W?ee(e.i,n):e.i=n}function Yt(e,t,n,r,l,o,i,a,u,s){var f=!!(u&R)?!(u&V)?Y(l):J(l):l,c=u&W?J(i):i,v={i:c,v:f,k:o,a:null,e:null,prev:n,next:r};try{return v.e=je((()=>a(e,f,c,s)),ne),v.e.prev=n&&n.e,v.e.next=r&&r.e,null===n?t.first=v:(n.next=v,n.e.next=v.e),null!==r&&(r.prev=v,r.e.prev=v.e),v}finally{}}function Zt(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,l=t?t.e.nodes_start:n,o=e.e.nodes_start;o!==r;){var i=fe(o);l.before(o),o=i}}function en(e,t,n){null===t?e.first=n:(t.next=n,t.e.next=n&&n.e),null!==n&&(n.prev=t,n.e.prev=t&&t.e)}function tn(e,t,n){var r,l,o=e;Ee((()=>{r!==(r=t())&&(l&&(Te(l),l=null),r&&(l=je((()=>n(o,r)))))}),T)}function nn(e,t,n,r){var l=e.__attributes??={};l[t]!==(l[t]=n)&&("style"===t&&"__styles"in e&&(e.__styles={}),"loading"===t&&(e[C]=n),null==n?e.removeAttribute(t):"string"!=typeof n&&function(e){var t,n=rn.get(e.nodeName);if(n)return n;rn.set(e.nodeName,n=[]);var r=e,l=Element.prototype;for(;l!==r;){for(var o in t=s(r))t[o].set&&n.push(o);r=v(r)}return n}(e).includes(t)?e[t]=n:e.setAttribute(t,n))}var rn=new Map;function ln(e,t,n,r){var l=e.__styles??={};l[t]!==n&&(l[t]=n,null==n?e.style.removeProperty(t):e.style.setProperty(t,n,""))}function on(e,t,n=t){var r=G();Nt(e,"input",(l=>{var o=l?e.defaultValue:e.value;if(o=an(e)?un(o):o,n(o),r&&o!==(o=t())){var i=e.selectionStart,a=e.selectionEnd;e.value=o??"",null!==a&&(e.selectionStart=i,e.selectionEnd=Math.min(a,e.value.length))}})),null==jt(t)&&e.value&&n(an(e)?un(e.value):e.value),_e((()=>{var n=t();an(e)&&n===un(e.value)||("date"!==e.type||n||e.value)&&n!==e.value&&(e.value=n??"")}))}function an(e){var t=e.type;return"number"===t||"range"===t}function un(e){return""===e?null:+e}function sn(e=!1){const t=H,n=t.l.u;if(!n)return;let r=()=>function(e){if("object"==typeof e&&e&&!(e instanceof EventTarget))if(q in e)Pt(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];"object"==typeof n&&n&&q in n&&Pt(n)}}(t.s);if(e){let e=0,n={};const l=pe((()=>{let r=!1;const l=t.s;for(const e in l)l[e]!==n[e]&&(n[e]=l[e],r=!0);return r&&e++,e}));r=()=>Et(l)}var l;n.b.length&&(l=()=>{fn(t,r),p(n.b)},be(),_e(l)),xe((()=>{const e=jt((()=>n.m.map(d)));return()=>{for(const t of e)"function"==typeof t&&t()}})),n.a.length&&xe((()=>{fn(t,r),p(n.a)}))}function fn(e,t){if(e.l.s)for(const t of e.l.s)Et(t);t()}function cn(e){var t,n;null===H&&function(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}(),D&&null!==H.l?(t=H,n=t.l,n.u??={a:[],b:[],m:[]}).m.push(e):xe((()=>{const t=jt(e);if("function"==typeof t)return t}))}function vn(e,...t){console.log("<O",e,t),window.parent.postMessage([e,...t],"https://x.com")}"undefined"!=typeof window&&(window.__svelte||={v:new Set}).v.add("5"),D=!0;const dn=new Set;function pn(e,t,n=!1){cn((()=>{const r=(l,o)=>{l==e&&(n&&dn.delete(r),t(...o))};return dn.add(r),()=>dn.delete(r)}))}function hn(e,t){return new Promise((n=>{const r=(e,l)=>{e==t&&(dn.delete(r),n(l))};dn.add(r),vn(e)}))}function gn(e,t,n){pn(t,n),cn((()=>vn(e)))}window.addEventListener("message",(e=>{if("https://x.com"!=e.origin)return;if(!Array.isArray(e.data)||e.data.length<1)return;const[t,...n]=e.data;console.log("I>",t,n);for(const e of[...dn])e(t,n)}));n("textarea.svelte-1ykbk7f{box-sizing:border-box;height:100%;margin:8px 0;padding:8px;resize:none;white-space:nowrap;width:100%}",{});const mn=(e,t)=>vn("filters.set",Et(t));var bn=$t("<div>Waiting...</div>"),yn=$t('<div class="tab"> </div>'),xn=$t('<div class="tab">Compiled successfully.</div>'),wn=$t('<button>Save and apply</button> <textarea class="svelte-1ykbk7f"></textarea> <!>',1),_n=$t("<div>Filter data not found.</div>");function kn(e,t){U(t,!0);let n=Q(null),r=Q(0);const l=hn("filters.get","filters.set").then((([e])=>Z(n,re(e||"# Start a line with a hashtag to have it ignored as a comment\n# Press `Recompile` when all changes are done to apply them\n# Each line contains one regex statement with an optional comment\n# The comment following a regex is its name, shown on filtered posts\n# Optionally prefix a filter to only apply to [b]ios or [u]sernames.\n# The filtered field is shown and does not need to be in the filter name\n#\n# Example of a regex to filter out everyone with an empty bio:\n# b/^$/ # Empty"))));pn("filters.compiled",(e=>{for(const t of e)console.warn(t);Z(r,re(e.length))}));var o=Rt();Ut(ve(o),(()=>l),(e=>{Wt(e,_n())}),(e=>{var t=wn(),l=ve(t);l.__click=[mn,n];var o=de(l,2);nn(o,"spellcheck",!1);var i=de(o,2),a=e=>{Wt(e,bn())},u=e=>{var t=Rt(),n=ve(t),l=e=>{var t=yn(),n=ce(t);ke((()=>Ft(n,`Compiled with ${Et(r)??""} lines skipped due to errors.`))),Wt(e,t)},o=e=>{Wt(e,xn())};Xt(n,(e=>{Et(r)>0?e(l):e(o,!1)}),!0),Wt(e,t)};Xt(i,(e=>{-1==Et(r)?e(a):e(u,!1)})),on(o,(()=>Et(n)),(e=>Z(n,e))),Wt(e,t)})),Wt(e,o),X()}Lt(["click"]);n("div.svelte-1jmhvn8{display:grid;gap:4px;grid-template-columns:repeat(3,1fr)}",{});var En=(e,t)=>vn("follow_list.open",Et(t)),jn=$t("<button> </button>"),On=$t('<div class="svelte-1jmhvn8"></div>');function Sn(e,t){U(t,!0),gn("follow_list.get","follow_list.set",(e=>Z(n,re(e))));let n=Q(void 0);var r=On();Jt(r,21,(()=>Et(n)),Gt,((e,t)=>{var n=jn();n.__click=[En,t];var r=ce(n);ke((()=>Ft(r,Et(t)))),Wt(e,n)})),Wt(e,r),X()}Lt(["click"]);n("div.svelte-jzrhhi{font-size:24px;text-transform:capitalize;&>div:where(.svelte-jzrhhi){display:flex;&>button:where(.svelte-jzrhhi){aspect-ratio:1/1;border:0;cursor:pointer;flex:1 1;margin:0 4px}}}",{});var Pn=(e,t)=>vn("theme_picker.current.set",t()),An=$t('<button class="svelte-jzrhhi"></button>'),Tn=$t('<div class="svelte-jzrhhi"> <div class="svelte-jzrhhi"></div></div>'),zn=$t('<div class="svelte-jzrhhi">Theme data not found.</div>');function Nn(e,t){U(t,!1);const n=hn("theme_picker.data.get","tab.theme_picker.data.set").then((([e])=>function(e){return Object.keys(e).filter((e=>e.endsWith("600"))).filter((e=>!e.startsWith("primary"))).map((e=>e.substring(0,e.length-3))).map((t=>[t,Object.entries(e).filter((([e])=>e.startsWith(t))).map((([e,t])=>[e,t]))]))}(e)));sn();var r=Rt();Ut(ve(r),(()=>n),(e=>{Wt(e,zn())}),((e,t)=>{var n=Rt();Jt(ve(n),1,(()=>Et(t)),Gt,((e,t)=>{var n=Tn(),r=ce(n);Jt(de(r),5,(()=>Et(t)[1]),Gt,((e,t)=>{let n=()=>Et(t)[0];var r=An();r.__click=[Pn,n],ke((()=>{nn(r,"aria-label",n()),nn(r,"title",n()),ln(r,"background-color",Et(t)[1])})),Wt(e,r)})),ke((()=>Ft(r,`${Et(t)[0]??""} `))),Wt(e,n)})),Wt(e,n)})),Wt(e,r),X()}Lt(["click"]);n("section.svelte-1n7906v{display:flex;margin-bottom:8px;&>input:where(.svelte-1n7906v){flex:1}}input.svelte-1n7906v{margin-right:8px;padding:0 8px}div.svelte-1n7906v{display:grid;grid-template-columns:1fr auto 1fr auto}span.svelte-1n7906v{line-height:34px;text-align:center}button.svelte-1n7906v:disabled{color:gray}button.resolved.svelte-1n7906v{text-align:center}",{});var qn=(e,t)=>vn("trackers.resolve",t()),Cn=(e,t)=>vn("follow_list.open",t()),Ln=$t('<button class="resolved svelte-1n7906v"> </button>'),Mn=$t('<span class="svelte-1n7906v"></span>'),Dn=(e,t,n)=>t(n()),$n=$t('<div class="svelte-1n7906v"><span class="svelte-1n7906v"> </span> <button class="svelte-1n7906v"></button> <!> <button class="svelte-1n7906v">X</button></div>'),Rn=$t('<section class="svelte-1n7906v"><input placeholder="@UserTracker" spellcheck="false" class="svelte-1n7906v"> <button class="svelte-1n7906v">Add Tracker</button></section> <!>',1);function Wn(e,t){U(t,!0);let n=Q(""),r=pe((()=>!/^@?[a-z0-9_]{5,15}$/gi.test(Et(n)))),l=re({});function o(e){delete l[e],vn("trackers.set",Object.keys(l))}hn("trackers.get","trackers.set").then((([e])=>{if(!e.length)return;const t=e.map((e=>{let t={};return t[e]=void 0,t}));Object.assign(l,...t)})),pn("tracker.resolve.fail",(()=>{alert("Account is not a tracker (single following account)")})),pn("tracker.resolved",((e,t)=>l[e]=t));var i=Rn(),a=ve(i),u=ce(a),s=de(u,2);s.__click=function(){let e=Et(n);e.startsWith("@")&&(e=e.substring(1)),l[e]=void 0,vn("trackers.set",Object.keys(l))},Jt(de(a,2),17,(()=>Object.entries(l)),Gt,((e,t)=>{let n=()=>Et(t)[0],r=()=>Et(t)[1];var l=$n(),i=ce(l),a=ce(i),u=de(i,2);u.__click=[qn,n],u.textContent="➤";var s=de(u,2),f=e=>{var t=Ln();t.__click=[Cn,r];var n=ce(t);ke((()=>Ft(n,`@${r()??""}`))),Wt(e,t)},c=e=>{Wt(e,Mn())};Xt(s,(e=>{r()?e(f):e(c,!1)})),de(s,2).__click=[Dn,o,n],ke((()=>Ft(a,`@${n()??""}`))),Wt(e,l)})),ke((()=>s.disabled=Et(r))),on(u,(()=>Et(n)),(e=>Z(n,e))),Wt(e,i),X()}Lt(["click"]);n("section.svelte-11ptzhi{column-gap:4px;display:grid;grid-template-columns:repeat(6,1fr);row-gap:4px}",{});var Fn=$t("<div> <br> <span> </span></div>"),In=$t('<section class="svelte-11ptzhi"></section>'),Vn=$t("<div>Debug data not found.</div>");function Bn(e,t){U(t,!1);const n=hn("debug.externs.get","debug.externs.set").then((([e])=>Object.entries(e)));sn();var r=Rt();Ut(ve(r),(()=>n),(e=>{Wt(e,Vn())}),((e,t)=>{var n=In();Jt(n,5,(()=>Et(t)),Gt,((e,t)=>{let n=()=>Et(t)[1];var r=Fn(),l=ce(r),o=de(l,3),i=ce(o);ke((()=>{Ft(l,`${Et(t)[0]??""} `),ln(o,"color",["cyan","lime","red"][n()]),Ft(i,["Loading","Succeeded","Failed"][n()])})),Wt(e,r)})),Wt(e,n)})),Wt(e,r),X()}n("#debug-tabs.svelte-ma39mq{display:flex;margin-bottom:4px;&>:where(.svelte-ma39mq){flex:1;margin:0 2px;text-align:center}}",{});var Hn=$t('<button class="svelte-ma39mq"> </button>'),Kn=$t('<div id="debug-tabs" class="svelte-ma39mq"></div> <div id="debug"><!></div>',1);function Un(e){let t=Q(0);const n=[["Externals",Bn]];Object.defineProperty(n,"Selected",{get:()=>n[Et(t)][1]});var r=Kn(),l=ve(r);Jt(l,21,(()=>n),Gt,((e,n,r)=>{var l=Hn();l.__click=()=>Z(t,re(r));var o=ce(l);ke((()=>Ft(o,Et(n)[0]))),Wt(e,l)})),tn(ce(de(l,2)),(()=>n.Selected),((e,t)=>{t(e,{})})),Wt(e,r)}Lt(["click"]);n("main.svelte-12h37bu{scrollbar-width:none;width:600px;&::-webkit-scroll{display:none}}nav.svelte-12h37bu{width:fit-content}main.svelte-12h37bu,nav.svelte-12h37bu{background-color:#000;border-left:1px solid var(--xp-accent);border-radius:16px;border-right:1px solid var(--xp-accent);display:flex;flex-direction:column;margin:16px;overflow-y:auto;padding:8px}nav.svelte-12h37bu button:where(.svelte-12h37bu):nth-of-type(2){margin-bottom:8px}button.svelte-12h37bu+button:where(.svelte-12h37bu){margin-top:4px}",{});const Xn=()=>vn("menu.reload");var Gn=$t('<button class="svelte-12h37bu"> </button>'),Jn=$t('<main class="svelte-12h37bu"><!></main>'),Qn=$t('<nav class="svelte-12h37bu"><button class="svelte-12h37bu">Hide</button> <button class="svelte-12h37bu">Reload</button> <!></nav> <!>',1);Lt(["click"]);n(":root{--xp-accent:#1d9bf0}.svelte-111a4mh{color:#fff;font-family:sans-serif;font-size:15px}#App.svelte-111a4mh{display:flex;height:100%;left:0;position:fixed;top:0}",{});var Yn=$t('<div id="App" class="svelte-111a4mh"><!></div>');!function(e,t){(function(e,{target:t,anchor:n,props:r={},events:l,context:o,intro:a=!0}){!function(){if(void 0===oe){oe=window;var e=Element.prototype,t=Node.prototype;ie=u(t,"firstChild").get,ae=u(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}();var s=new Set,f=e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!s.has(r)){s.add(r);var l=Tt(r);t.addEventListener(r,Mt,{passive:l});var o=It.get(r);void 0===o?(document.addEventListener(r,Mt,{passive:l}),It.set(r,1)):It.set(r,o+1)}}};f(i(qt)),Ct.add(f);var c=void 0,v=function(e){const t=ye(x,e,!0);return(e={})=>new Promise((n=>{e.outro?Te(t,(()=>{Pe(t),n(void 0)})):(Pe(t),n(void 0))}))}((()=>{var i=n??t.appendChild(ue());return je((()=>{o&&(U({}),H.c=o);l&&(r.$$events=l),c=e(i,r)||{},o&&X()})),()=>{for(var e of s){t.removeEventListener(e,Mt);var r=It.get(e);0==--r?(document.removeEventListener(e,Mt),It.delete(e)):It.set(e,r)}Ct.delete(f),i!==n&&i.parentNode?.removeChild(i)}}));Vt.set(c,v)})(e,t)}((function(e,t){U(t,!1),gn("theme.get","theme.set",(e=>e&&document.documentElement.style.setProperty("--xp-accent",e))),sn();var n=Yn();!function(e,t){U(t,!0);let n=Q(-1);const r=[["Filters",kn],["Follow List",Sn],["Theme Picker",Nn],["Tracker",Wn],["Debug",Un]];Object.defineProperty(r,"Selected",{get:()=>r[Et(n)][1]});const l=()=>vn("menu.hide"),o=e=>"Escape"==e.key&&l();cn((()=>(document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o))));var i=Qn(),a=ve(i),u=ce(a);u.__click=l;var s=de(u,2);s.__click=[Xn],Jt(de(s,2),17,(()=>r),Gt,((e,t,r)=>{var l=Gn();l.__click=()=>Z(n,re(r));var o=ce(l);ke((()=>Ft(o,Et(t)[0]))),Wt(e,l)}));var f=de(a,2),c=e=>{var t=Jn();tn(ce(t),(()=>r.Selected),((e,t)=>{t(e,{})})),Wt(e,t)};Xt(f,(e=>{-1!=Et(n)&&e(c)})),Wt(e,i),X()}(ce(n),{}),Wt(e,n),X()}),{target:document.body});
