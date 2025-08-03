import { settings } from "../../settings";
import { API } from "../api";
import { extern_APIFetchUser, extern_APIProfileActions } from "../externs";
import { send, subscribe } from "./commands";

subscribe("profile_preset.get", () => send("profile_preset.set", settings.profile_preset));
subscribe("profile_preset.set", value => settings.profile_preset = value);
subscribe("profile_preset.apply", async (value: typeof settings.profile_preset) => {
    settings.profile_preset = value;

    const resp = await (await extern_APIFetchUser).ZP(API).fetchViewer({ isDelegate: false });
    const user = Object.values(resp.normalizedResult.entities.users)[0] as any;

    let url = user.entities.url.urls.find(x => x.url == user.url).expanded_url;
    if (url.length > 100) // It is possible to get a URL longer than 100 characters by not including the protocol
        url = url.substring(url.indexOf("://") + 3);

    await (await extern_APIProfileActions).Z(API).updateProfile({
        birthdate_day: user.birthdate.day,
        birthdate_month: user.birthdate.month,
        birthdate_year: user.birthdate.year,
        birthdate_visibility: user.birthdate.visibility,
        birthdate_year_visibility: user.birthdate.year_visibility,
        displayNameMaxLength: 50,
        url: randomize(value.url) || url,
        name: randomize(value.name) || user.name,
        description: randomize(value.description) || user.description,
        location: randomize(value.location) || user.location,
    });
});

function randomize(val: string): string {
    const gen = (vals: string) => vals[Math.floor(Math.random() * vals.length)];

    const parts = [];
    while (val.includes("\\")) {
        let index = val.indexOf("\\");
        parts.push(val.substring(0, index));
        parts.push(val.substring(index, index + 2));
        val = val.substring(index + 2);
    }

    return parts.concat(val).filter(x => x).map(part => {
        if (part[0] != "\\") return part;
        let cmd = part[1];
        if (cmd == "\\") return "\\"
        if (cmd == "h") return gen("0123456789abcdef");
    }).join("");
}
