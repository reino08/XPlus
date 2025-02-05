import { extern_UserData } from "../externs.ts";
import { send, subscribe } from "./commands.ts";
import { GraphQL } from "../../../config.json";

const API_BASE = "https://x.com/i/api/graphql/";

let trackers: string[] | undefined;

GM.getValue("xp-trackers").then((value) => {
    trackers = (value as string[] | undefined) || [];
    subscribe("trackers.get", () => send("trackers.set", trackers));
});

subscribe("trackers.set", (value) =>
    GM.setValue("xp-trackers", (trackers = value))
);

extern_UserData.then((exports) => {
    const auth = (
        Object.values(exports).filter(
            (value) =>
                typeof value == "function" && value.toString().includes("Bearer")
        )[0] as (platform: boolean) => string
    )(false);
    let csrf = document.cookie.substring(document.cookie.indexOf("ct0=") + 4);
    let next = csrf.indexOf(";");
    if (next != -1) csrf = csrf.substring(0, next);

    const headers = {
        Authorization: auth,
        "X-Csrf-Token": csrf,
        credentials: "same-origin",
    };

    subscribe("trackers.resolve", async (value) => {
        let username = await fetch(
            `${API_BASE}${GraphQL.UserByScreenName.ID}/UserByScreenName?variables=%7B%22screen_name%22%3A%22${value}%22%7D${GraphQL.UserByScreenName.Features}`,
            { headers }
        );
        let obj = await username.json();
        let id = obj.data.user.result.rest_id;

        let following = await fetch(
            `${API_BASE}${GraphQL.Following.ID}/Following?variables=%7B%22userId%22%3A%22${id}%22%2C%22count%22%3A20%2C%22includePromotedContent%22%3Afalse%7D${GraphQL.Following.Features}`,
            { headers }
        );
        let data = await following.text();

        let index = data.indexOf("screen_name");
        if (index == -1) return send("tracker.resolve.fail", false);

        data = data.substring(index + 14);
        if (data.indexOf("screen_name") != -1)
            return send("tracker.resolve.fail", true);

        let resolved = data.substring(0, data.indexOf('"'));
        send("tracker.resolved", value, resolved);
    });
});
