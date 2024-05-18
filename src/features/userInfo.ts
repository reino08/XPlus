import { React } from "../react.ts";
import { findInTree } from "../utils.ts";
import Webpack from "../webpack.ts";

export default function init() {
    Webpack.get(
        (_, exports) => exports?.Z?.prototype?.render?.toString?.()?.includes?.("_useUserHoverCardWrapper")
    ).then(exports => {
        let original = exports.Z.prototype.render;
        exports.Z.prototype.render = function () {
            let res = original.apply(this, arguments);

            let user = findInTree(this._reactInternals, "user", (x: any) => x.pendingProps.user, 25, true);
            if (!user) return res;


            let children = [
                newElement("span", "like", true, user.favourites_count, 100),
                newElement("span", "post", true, user.statuses_count, 10),
                newElement("span", "media", false, user.media_count, 5),
                newElement("a", "list", true, -(user.listed_count || 0), 0,
                    { href: `${document.location.origin}/${user.screen_name}/lists/memberships` }
                ),
            ];

            res.props.children.props.children.push(
                React.createElement("div", { className: "xp-userinfo-container" }, children)
            );

            return res;
        }

        function newElement(type: string, suffix: string, singular: boolean, value: number, threshold: number, extra?: any) {
            let normalized = (Math.abs(value) || 0);
            if (singular && normalized != 1)
                suffix += "s";

            return React.createElement(type, {
                className: "xp-userinfo-child",
                style: {
                    color: (value < threshold) ? "#FFF" : "#71767B",
                },
                ...(extra || {})
            }, `${normalized} ${suffix}`);
        }
    });
}
