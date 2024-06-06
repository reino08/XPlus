import Logger from "./logger.ts";

type ApplyTrap = (target: any, self: any, args: any[]) => any;
type NewResult = { args?: any[], value?: any };
type Prepatch = (self: any, args: any[], res: NewResult) => void;
type Postpatch = (self: any, args: any[], res: any) => [any] | void;

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

export function patchHalves(object: any, prop: PropertyKey, before?: Prepatch, after?: Postpatch) {
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

export class Patch {
    pre: Postpatch[] = [];
    post: Postpatch[] = [];

    constructor(object: any, prop: PropertyKey) {
        patchHalves(
            object, prop,
            (self, args, res) => {
                for (let key in this.pre) {
                    try {
                        this.pre[key](self, args, res);
                        if (res.value) return;
                        if (res.args)
                            args = res.args;
                    } catch (err) {
                        Logger.error("Exception occurred in pre patch:", err);
                        delete this.pre[key];
                    }
                }
            }, (self, args, res) => {
                for (let key in this.post) {
                    try {
                        let val = this.post[key](self, args, res);
                        if (Array.isArray(val) && val.length == 1)
                            res = val[0];
                    } catch (err) {
                        Logger.error("Exception occurred in post patch:", err);
                        delete this.post[key];
                    }
                }
            }
        );
    }

    subscribe<T = Prepatch | Postpatch>(list: T[], item: T, priority?: number) {
        if (priority) {
            item["priority"] = priority;
            for (let i = 0; i < list.length; i++) {
                let current = list[i]["priority"] || 0;
                if (priority > current)
                    return void list.splice(i, 0, item);
                if (priority == current && Number.isFinite(priority))
                    Logger.warn(`Two patches have the same priority (${priority}):`, item, list[i]);
            }
        }

        return void list.push(item);
    }
}
