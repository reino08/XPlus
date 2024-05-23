import Webpack from "../modules/webpack.ts";
import Menu from "./menu.tsx";
import { React, ReactDOM, Wait } from "../modules/react.ts";
import { patchHalves } from "../patch.ts";

let element: HTMLDivElement;
let button: any;

Webpack.getString("showHasNewItemsIndicator", x => x?.ZP).then(exports => button = exports.ZP);
Webpack.getString("wideMode", x => x?.ZP).then(exports => {
    patchHalves(exports, "ZP", undefined, (_, args, res) => {
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
                    element.style.display = "";
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
    });
});

Wait.then(() => {
    element = document.createElement("div");
    element.id = "xp-ui-root";
    element.style.display = "none";
    document.body.appendChild(element);

    let root = ReactDOM.createRoot(element);
    root.render(React.createElement(Menu, {
        hide: () => element.style.display = "none",
    }));

    document.addEventListener("keydown", e => {
        if (e.key == "Escape" && element.style.display != "none") {
            e.preventDefault();
            e.stopPropagation(); // Maybe unneeded
            element.style.display = "none";
        }
    });
});

