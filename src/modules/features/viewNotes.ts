import Webpack from "../webpack.ts";
import { patchHalves } from "../../patch.ts";

// TODO: fix this module.
// let target;
// Webpack.get(exports => {
//     let render = exports?.default?.WrappedComponent?.type?.WrappedComponent?.type?.render;
//     if (typeof render != "function") return false;
//     let prototype = render()?.props?.wrappedComponent?.WrappedComponent?.prototype;
//     if (!prototype) return false;
//     let result = "_shouldIncludeTweetAppealOption" in prototype;
//     if (result) target = prototype;
//     return result;
// }).then(() => {
//     patchHalves(target, "render", self => {
//         patchHalves(self, "_getActionItemsAndDividerIndices", undefined, (_, __, res: any[]) => {
//             res[0].push({
//                 text: "View community notes",
//                 link: "/i/birdwatch/t/" + self.props.tweet.id_str
//             });
//         });
//     });
// });
