// ==UserScript==
// @name        X+ Post Downloader
// @namespace   X+
// @match       *://twitter.com/*
// @match       *://x.com/*
// @run-at      document-start
// @homepageURL https://github.com/reino08/XPlus
// @downloadURL https://reino08.github.io/XPlus/X+.postDownloader.user.js
// @grant       GM_registerMenuCommand
// @grant       GM_unregisterMenuCommand
// @grant       GM_download
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_listValues
// ==/UserScript==
function e(e){for(const t of["bookmarked","favorited","retweeted"])delete e.legacy[t];return e.legacy.views=e.views,e.legacy}GM_registerMenuCommand("Save results",(()=>{const e=prompt("Enter numerical user ID:");if(!e)return;const t=GM_listValues().filter((t=>t.startsWith(`results_${e}_`))).map((e=>GM_getValue(e,[]))).filter((e=>Array.isArray(e)&&e.length)).flatMap((e=>e)).map((e=>JSON.stringify(e))).join("\n");GM_download({url:URL.createObjectURL(new Blob([t],{type:"text/plain"})),name:`post_downloader_results_${e}.txt`})}));let t=!1;var n,r;function o(e){return new Promise((t=>setTimeout(t,e)))}n="Post Downloader",r=n=>{function r(){GM_registerMenuCommand("Start downloading",(()=>{const r=prompt("Enter numerical user ID:");r&&(GM_unregisterMenuCommand("Start downloading"),s(),t=!1,async function(n,r){const i=(await n.externs.extern_APIFetchPosts).Z(n.APIClient);let a,l=0;for(;!t;){try{const t=(await i.fetchUserTweetsAndReplies({userId:r,cursor:a})).instructions.filter((e=>"TimelineAddEntries"==e.type)).flatMap((e=>e.entries));a=t.find((e=>e.entryId.startsWith("cursor-bottom-"))).content.value;const o=t.filter((e=>e.entryId.startsWith("profile-conversation"))).flatMap((e=>e.content.items)).map((e=>e.item.itemContent?.tweet_results.result)).map((e=>"TweetWithVisibilityResults"==e.__typename?e.tweet:e)).filter((e=>e.legacy.user_id_str==r));GM_setValue(`results_${r}_${crypto.randomUUID()}`,o.map(e)),0==o.length?5==++l?(n.Logger.write("Finished downloading."),s()):n.Logger.write("Received no posts, increasing delay"):(n.Logger.write(`Saved ${o.length} posts`),l=0)}catch(e){console.warn("Waiting due to error:",e),await o(3e4)}t||await o(5e3*(l+1))}}(n,r))}))}function s(){GM_registerMenuCommand("Stop downloading",(()=>{GM_unregisterMenuCommand("Stop downloading"),r(),t=!0}))}r()},(unsafeWindow[Symbol.for("X+ Addons 1")]||=[]).push([r,n]);
