import Webpack from "../webpack.ts";
import Logger from "../../logger.ts";
import { patchHalves } from "../../patch.ts";

Webpack.get(exports => exports?.HWCard).then(exports => {
    let original = exports.HWCard.prototype.render;
    exports.HWCard.prototype.render = function () {
        let res = original.apply(this, arguments);

        let current = this._reactInternals;
        if (!current?.child) return res;

        while (!current.type?.prototype?._renderChoiceResult) {
            if (current.child) current = current.child;
            else if (current.sibling) current = current.sibling;
            else {
                Logger.log("Failed to locate vote");
                return res;
            }
        }

        patchHalves(current.type.prototype, "render", self => {
            for (let choice of self.props.choices)
                choice.cta = `${choice.cta} (${choice.count})`;
        });

        exports.HWCard.prototype.render = original;
        return res;
    }
});
