import Webpack from "../webpack.ts";
import { React, ReactDOMPromise, ReactPromise } from "../react.ts";
import Menu from "./menu.tsx";

let element: HTMLDivElement;

export function init() {
    let button: any;

    Webpack.get(
        (_, exports) => exports?.ZP?.toString()?.includes("showHasNewItemsIndicator")
    ).then(exports => {
        button = exports.ZP;
    });

    Webpack.get(
        (_, exports) => exports?.ZP?.toString()?.includes("wideMode")
    ).then(exports => {
        let original = exports.ZP;
        Object.defineProperty(exports, "ZP", {
            value: function () {
                let res = original.apply(this, arguments);
                if (!button) return res;

                res.props.children.props.children.push(
                    React.createElement(button, {
                        "aria-label": "Open X+ Menu",
                        label: "Open Menu",
                        layout: "vertical",
                        rank: 99,
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

                return res;
            }
        })
    });

    Promise.all([ReactPromise, ReactDOMPromise]).then(([React, ReactDOM]) => {
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
}
