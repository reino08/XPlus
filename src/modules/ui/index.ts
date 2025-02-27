import { ui_url } from "../../../config.json";
import { React } from "../react.ts";
import { __setFrame, subscribe } from "./commands.ts";
import { extern_SidebarButton } from "../externs.ts";
import { SidebarPatch } from "../patches.ts";

export let frame: HTMLIFrameElement;
let button: any;

extern_SidebarButton.then(exports => button = exports.ZP);
SidebarPatch.then(patch => patch.subscribe(patch.post, (_, args, res) => {
    if (!button) return;

    if (args[0].xpAdded) return;
    args[0].xpAdded = true;

    let children = res.props.children.props.children;
    children.splice(children.length - 2, 0,
        React.createElement(button, {
            "aria-label": "Open X+ Menu",
            label: "Open Menu",
            layout: "vertical",
            rank: 0,
            onClick(e: MouseEvent) {
                e.preventDefault();
                frame.style.display = "";
            },
            renderIcon() {
                return React.createElement("div", {
                    style: {
                        width: "24px",
                        height: "24px",
                        fontSize: "24px",
                        fontFamily: "TwitterChirp",
                        lineHeight: "24px",
                    }
                }, "X+")
            },
            withLabel: res.props.children.props.children[0].props.withLabel,
        })
    );
}))

window.addEventListener("load", () => {
    frame = GM_addElement(document.body, "iframe", {
        id: "xp-ui-root",
        src: ui_url
    }) as HTMLIFrameElement;

    frame.style.display = "none";
    __setFrame(frame);

    subscribe("menu.hide", () => frame.style.display = "none");
});
