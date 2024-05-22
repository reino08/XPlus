type ApplyTrap = (target: any, self: any, args: any[]) => any;
type NewResult = { args?: any[], value?: any };

function __patch(object: any, prop: PropertyKey, replacement: ApplyTrap) {
    Object.defineProperty(object, prop, {
        value: new Proxy(object[prop], {
            apply: replacement
        })
    })
}

// export function patchManual(object: any, prop: any, replacement: Function) {
//     __patch(object, prop, (target, self, args) => replacement.call(this, (args: any[]) => Reflect.apply(target, self, args), ...args));
// }

export function patchHalves(object: any, prop: any, before?: (self: any, args: any[], res: NewResult) => void, after?: (self: any, args: any[], res: any) => [any] | void) {
    __patch(object, prop, (target, self, args) => {
        if (before) {
            let res: NewResult = {};
            before(self, args, res);

            if (res.value)
                return res.value;
            if (res.args)
                args = res.args;
        }

        let res = Reflect.apply(target, self, args);

        if (after) {
            let newRes = after(self, args, res);
            if (Array.isArray(newRes))
                return newRes[0];
        }

        return res;
    })
}

