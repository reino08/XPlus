import { patchHalves } from "../../patch.ts";
import { extern_JoinDate } from "../externs.ts";

window["dayjs"].extend(window["dayjs_plugin_relativeTime"]);

extern_JoinDate.then(exports => {
    patchHalves(exports.Z, "type", undefined, (_, args, res) => {
        if (res?.props?.children)
            res.props.children += ` (${window["dayjs"](args[0].joinDate).fromNow()})`;
    })
});
