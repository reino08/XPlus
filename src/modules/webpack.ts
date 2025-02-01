import { webpackChunkName } from "../../config.json";
import Logger from "../logger.ts";

type Callback = (exports: any, key: number) => void;
type Predicate = (exports: any, key: number) => boolean;

export default class Webpack {
    static listeners = new Set<Callback>();
    static loader: any;

    static get(check: Predicate): Promise<any> {
        return new Promise((res) => {
            let listener = (exports: any, key: number) => {
                if (check(exports, key)) {
                    res(exports);
                    Webpack.listeners.delete(listener);
                }
            };

            Webpack.listeners.add(listener);
        });
    }

    static getID(id: any): Promise<any> {
        let module = Webpack.loader?.c[id];
        if (module) return Promise.resolve(module);

        return Webpack.get((key) => id == key);
    }

    static getString(string: string, accessor: Function): Promise<any> {
        let filter = x => {
            const prop = accessor(x);
            return prop?.toString == String.toString && prop.toString().includes(string);
        }

        if (Webpack.loader?.c) {
            let result = Object.values(Webpack.loader?.c)
                .map((x: any) => x.exports)
                .filter(filter)
            if (result.length != 1) {
                Logger.warn(`${result.length} results from string search: "${string}"`, result);
                return Promise.reject(result.length);
            }
            return Promise.resolve(result[0]);
        }

        return Webpack.get(filter);
    }

    static getProps(accessor: Function, ...props: string[]) {
        let filter = x => {
            let obj = accessor(x);
            if (!obj) return false;
            return props.some(prop => obj[prop]);
        }

        if (Webpack.loader?.c) {
            let result = Object.values(Webpack.loader?.c)
                .map((x: any) => x.exports)
                .filter(filter)
            if (result.length != 1) {
                Logger.warn(`${result.length} results from prop search: "${props}"`, result);
                return Promise.reject(result.length);
            }
            return Promise.resolve(result[0]);
        }

        return Webpack.get(filter);
    }
}

forceConfigure();

// Create a setter to get it the moment webpack sets it
Object.defineProperty(unsafeWindow, webpackChunkName, {
    set(chunks: [any]) {
        // Remove our property and replace it with the array that was just set
        delete unsafeWindow[webpackChunkName];
        unsafeWindow[webpackChunkName] = chunks;

        // Webpack changes the push function on the array to load chunks
        //   so put another setter and wait
        Object.defineProperty(chunks, "push", {
            // Webpack retrieves the original function to call in the replacement
            get: () => Array.prototype.push,
            set: (push) => {
                // The patch will need the original function, so make it available
                chunks["webpackPush"] = push;

                // The property still has a setter so it needs to be redefined
                Object.defineProperty(chunks, "push", {
                    value: patch.bind(this, chunks),
                });

                // Get the Webpack loader by adding an empty module with a 3rd parameter
                chunks.push([["X+"], {}, (load: any) => (Webpack.loader = load)]);
            },
        });
    },
});

// This function is mostly from BetterDiscord
function patch(chunks: any, chunk: any) {
    const [, modules] = chunk;

    for (const _key in modules) {
        const key = Number(_key);
        const module = modules[key];

        modules[key] = (...args: [any, any, any]) => {
            let [self, _, require] = args;
            // self.exports !== _ occasionally.

            try {
                module.apply(null, args);

                if (self.exports instanceof Object)
                    Object.defineProperty(self.exports, "__xp_module", { get: () => module });

                for (let listener of [...Webpack.listeners])
                    listener(self.exports, key);
            } catch (error) {
                Logger.error(error);
            } finally {
                require.m[key] = module;
            }
        };

        modules[key].toString = () => module.toString();
    }

    // `this` is the webpack chunks object, set by the bind call in the init function
    return chunks.webpackPush(chunk);
}

// Webpack sets the getter functions on module exports to be unconfigurable.
// This causes issues when trying to change them, so it must be prevented.
function forceConfigure() {
    let original = Object.defineProperty;
    Object.defineProperty = function (target, prop, options) {
        if (options.get || options.set) options.configurable = true;

        return original.call(this, target, prop, options);
    };
}
