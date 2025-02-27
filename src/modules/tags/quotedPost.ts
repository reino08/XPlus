import { QuotedPostPatch } from "../patches.ts";
import { React } from "../react.ts";

QuotedPostPatch.then(patch => patch.subscribe(patch.post, (_, __, res) => {
    return [[
        React.createElement("span", { className: "xp-tag xp-quoted-post" }),
        ...React.Children.toArray(res),
    ] as any];
}, -100));