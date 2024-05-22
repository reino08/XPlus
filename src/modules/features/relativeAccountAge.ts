import Webpack from "../webpack.ts";
import { patchHalves } from "../../patch.ts";

window["dayjs"].extend(window["dayjs_plugin_relativeTime"]);

Webpack.getString("joinDate", x => x?.Z?.type).then(exports => {
    patchHalves(exports.Z, "type", undefined, (_, args, res) => {
        if (res?.props?.children)
            res.props.children += ` (${window["dayjs"](args[0].joinDate).fromNow()})`;
    })
});
