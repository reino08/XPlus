import { patchHalves } from "../../patch.ts";
import { extern_APIBadgeCount } from "../externs.ts";

let dm_count: number = 0;
let notif_count: number = 0;

type BadgeCountData = {
    dm_unread_count: number;
    is_from_urt: boolean;
    ntab_unread_count: number;
    total_unread_count: number;
};

const audio = document.createElement("audio");

GM.xmlHttpRequest({
    url: "https://raw.githubusercontent.com/reino08/XPlus/refs/heads/master/assets/notification.mp3",
    responseType: "blob",
}).then(data => audio.src = URL.createObjectURL((data as any).response));

extern_APIBadgeCount.then(exports => patchHalves(exports, "Z", undefined, (_, __, res) => {
    patchHalves(res, "fetchBadgeCount", undefined, (_, __, res: Promise<BadgeCountData>) => {
        res.then((data) => {
            if (data.dm_unread_count > dm_count
                || data.ntab_unread_count > notif_count)
                audio.play();

            dm_count = data.dm_unread_count;
            notif_count = data.ntab_unread_count;
        });
    });
}));
