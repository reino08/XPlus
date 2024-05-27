import Webpack from "../webpack.ts";
import { patchHalves } from "../../patch.ts";

Webpack.get(exports => exports?.HWCard).then(exports => {
    patchHalves(exports.HWCard.prototype, "render", self => {
        if (self.props.card.binding_values.__isProxy) return;

        self.props.card.binding_values = new Proxy(self.props.card.binding_values, {
            get(target, prop: string, recv) {
                if (prop == "__isProxy") return true;

                let res = Reflect.get(target, prop, recv);
                if (!prop.endsWith("_label"))
                    return res;

                let countProp = prop.substring(0, 8) + "count";

                return new Proxy(res, {
                    get(target2, prop, recv) {
                        let res = Reflect.get(target2, prop, recv);
                        if (prop != "string_value") return res;

                        return `${res} (${target[countProp]?.string_value || "0"})`;
                    }
                });
            }
        });
    });
});
