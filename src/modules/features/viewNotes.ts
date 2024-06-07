import Webpack from "../webpack.ts";
import { patchHalves } from "../../patch.ts";

let target;
Webpack.get(exports => {
    let render = exports?.default?.WrappedComponent?.type?.WrappedComponent?.type?.render;
    if (typeof render != "function") return false;
    let prototype = render()?.props?.wrappedComponent?.WrappedComponent?.prototype;
    if (!prototype) return false;
    let result = "_shouldIncludeTweetAppealOption" in prototype;
    if (result) target = prototype;
    return result;
}).then(() => {
    patchHalves(target, "render", self => {
        if (self._getActionItemsAndDividerIndices.__isProxy) return;
        self._getActionItemsAndDividerIndices = new Proxy(self._getActionItemsAndDividerIndices, {
            get(target, prop, receiver) {
                if (prop == "__isProxy") return true;
                return Reflect.get(target, prop, receiver);
            },
            apply(target, thisArg, argArray) {
                let res: any = Reflect.apply(target, thisArg, argArray);
                res[0].push({
                    text: "View community notes",
                    link: "/i/birdwatch/t/" + self.props.tweet.id_str
                });
                return res;
            },
        });
    });
});
