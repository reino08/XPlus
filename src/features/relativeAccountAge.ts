import Webpack from "../webpack.ts";

export default function init() {
    window["dayjs"].extend(window["dayjs_plugin_relativeTime"]);

    Webpack.get(
        (_, exports) => exports?.Z?.type?.toString?.()?.includes?.("joinDate")
    ).then(exports => {
        let original = exports.Z.type;
        exports.Z.type = function () {
            let res = original.apply(this, arguments);
            if (res?.props?.children)
                res.props.children += ` (${window["dayjs"](arguments[0].joinDate).fromNow()})`;
            return res;
        }
    });
}
