import { React } from "../react.ts";
import { findInTree, makeLink } from "../../utils.ts";
import { UserCardPatch } from "../patches.ts";

UserCardPatch.then(patch => patch.subscribe(patch.post, (self, _, res) => {
    let user = findInTree(self._reactInternals, (x: any) => x.pendingProps.user, 25, true);
    if (!user) return;

    let children = [
        React.createElement("span", ...make("like", true, user.favourites_count, 100)),
        React.createElement("span", ...make("post", true, user.statuses_count, 10)),
        React.createElement("span", ...make("media", false, user.media_count, 5)),
        makeLink(...make("list", true, -(user.listed_count || 0), 0), `/${user.screen_name}/lists/memberships`),
        makeLink({}, `ID: ${user.id_str}`, `/i/perma/${user.id_str}`)
    ];

    res.props.children.props.children.push(
        React.createElement("div", { className: "xp-userinfo" }, children)
    );
}));

function make(suffix: string, single: boolean, value: number, threshold: number): [{}, string] {
    let normalized = (Math.abs(value) || 0);
    if (single && normalized != 1)
        suffix += "s";
    return [
        value < threshold ? { "data-threshold": true } : null,
        `${normalized} ${suffix}`
    ];
}
