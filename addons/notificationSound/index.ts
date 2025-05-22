import { registerNamedAddon } from "../core.ts";

const audio = document.createElement("audio");
GM.xmlHttpRequest({
    url: "https://raw.githubusercontent.com/reino08/XPlus/refs/heads/master/assets/notification.mp3",
    responseType: "blob",
}).then(data => audio.src = URL.createObjectURL((data as any).response));

registerNamedAddon("Notification Sound", async (xp) => {
    xp.externs.extern_APIBadgeCount.then(exports => xp.Patch.patchHalves(exports, "Z", undefined, (_, __, res) => {
        xp.Patch.patchHalves(res, "fetchBadgeCount", undefined, (_, __, res: Promise<BadgeCountData>) => {
            res.then((data) => {
                if (data.dm_unread_count > dm_count
                    || data.ntab_unread_count > notif_count) {
                    try {
                        audio.play();
                    } catch {
                        xp.Logger.warn("Failed to play notification sound (inactive)");
                    }
                }

                dm_count = data.dm_unread_count;
                notif_count = data.ntab_unread_count;
            });
        });
    }));
});

let dm_count: number = 0;
let notif_count: number = 0;

type BadgeCountData = {
    dm_unread_count: number;
    is_from_urt: boolean;
    ntab_unread_count: number;
    total_unread_count: number;
};



