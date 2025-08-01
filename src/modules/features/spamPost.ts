import { APIFetcher, PostActions } from "../../../types/api";
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
        console.log(post);
        if (!active) return;
        let promise = res
            .then(() => extern_APIPostActions)
            .then((exports: APIFetcher<'ZP', PostActions>) => exports.ZP(API));
        while (--count > 0)
            promise = promise.then(async (actions: PostActions) => {
                post.status = makeUnique(post.status);
                await actions.sendTweet(post);
                return actions;
            });
        return [promise];
    });
}));

// TODO: make this better
function makeUnique(status: string): string {
    return status + ".";
}
