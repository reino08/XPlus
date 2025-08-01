import { PostActions } from "../../../types/api";
import Logger from "../../logger";
import { patchHalves } from "../../patch";
import { API } from "../api";
import { extern_APIPostActions } from "../externs";

let active = false;
window.addEventListener("keydown", e => e.key == "Shift" && (active = true));
window.addEventListener("keyup", e => e.key == "Shift" && (active = false));
window.addEventListener("blur", () => active = false);

extern_APIPostActions.then(exports => patchHalves(exports, "ZP", undefined, (_, __, res) => {
    let count: number;
    patchHalves(res, "sendTweet", (_, __, res) => {
        if (!active) return;
        count = parseInt(prompt("Amount of times to send the post?"));
        if (Number.isNaN(count))
            return res.value = null; // cancel
    }, (_, [post], res) => {
        if (!active) return;
        let promise = res
            .then(async (original: any) => [original, (await extern_APIPostActions).ZP(API)])
        for (let index = 1; index < count; index++)
            promise = promise.then(async ([original, actions]: [any, PostActions]) => {
                Logger.log(`[${Math.round(index / count * 100).toString().padStart(3, ' ')}%] Sent post ${index}`);
                post.status = makeUnique(post.status);
                await actions.sendTweet(post);
                return [original, actions];
            });
        promise = promise.then(([original]) => {
            Logger.log(`[100%] Sent post ${count}`);
            return original;
        });
        return [promise];
    });
}));

// TODO: make this better
function makeUnique(status: string): string {
    return status + ".";
}
