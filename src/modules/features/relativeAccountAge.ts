import Webpack from "../webpack.ts";

window["dayjs"].extend(window["dayjs_plugin_relativeTime"]);

Webpack.getString("joinDate", x => x?.Z?.type).then(exports => {
    let original = exports.Z.type;
    exports.Z.type = function () {
        let res = original.apply(this, arguments);
        if (res?.props?.children)
            res.props.children += ` (${window["dayjs"](arguments[0].joinDate).fromNow()})`;
        return res;
    }
});
