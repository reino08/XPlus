import Logger from "../../logger.ts";
import { patchHalves } from "../../patch.ts";
import { extern_FollowButton } from "../externs.ts";

export let list: string[] = [];
export let callbacks: Function[] = [];

GM.getValue("xp-follow-list").then(value => {
    const string = value as string | undefined;
    if (!string) return;
    list = string.split("\n").filter(x => x.trim().length != 0);
});

extern_FollowButton.then(exports => {
    patchHalves(exports.Z.prototype, "render", undefined, (_, __, res) => {
        let onFollow = res.props.onFollow,
            onUnfollow = res.props.onUnfollow;

        res.props.onFollow = function () {
            let index = list.indexOf(res.props.name);
            if (index == -1) {
                list.push(res.props.name);
                save();
            }

            return onFollow.apply(this, arguments);
        }

        res.props.onUnfollow = function () {
            let index = list.indexOf(res.props.name);
            if (index != -1) {
                list.splice(index, 1);
                save();
            }

            return onUnfollow.apply(this, arguments);
        }
    });
})


function save() {
    GM.setValue("xp-follow-list", list.join("\n"));
    try {
        callbacks.forEach(x => x());
    } catch (err) {
        Logger.warn("Error while running follow list change callback:", err)
    }
}
