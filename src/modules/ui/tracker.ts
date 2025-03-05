import { extern_APIFetchUser, extern_APIFollowing } from "../externs.ts";
import { send, subscribe } from "./commands.ts";
import { settings } from "../../settings.ts";
import { API } from "../api.ts";

subscribe("trackers.get", () => send("trackers.set", settings.trackers));
subscribe("trackers.set", (value) => settings.trackers = value);

subscribe("trackers.resolve", async (value) => {
    const userId = (await (await extern_APIFetchUser).ZP(API).fetchOneUserByScreenName({ screen_name: value })).result;
    let data = JSON.stringify(await (await extern_APIFollowing).ZP(API).fetchFollowing({ userId }));

    let index = data.indexOf("screen_name");
    if (index == -1) return send("tracker.resolve.fail", false);

    data = data.substring(index + 14);
    if (data.indexOf("screen_name") != -1)
        return send("tracker.resolve.fail", true);

    let resolved = data.substring(0, data.indexOf('"'));
    send("tracker.resolved", value, resolved);
});
