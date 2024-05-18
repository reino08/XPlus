import { webpackChunkName } from "../config.json";

type Callback = (key: any, exports: any) => void;

export default class Webpack {
    static listeners = new Set<Callback>();
    static loader: any;

    static init() {
        forceConfigure();

        // Create a setter to get it the moment webpack sets it
        Object.defineProperty(window, webpackChunkName, {
            set(chunks: [any]) {
                // Remove our property and replace it with the array that was just set
                delete window[webpackChunkName];
                window[webpackChunkName] = chunks;

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
    }

    static get(check: (key: any, exports: any) => boolean): Promise<any> {
        return new Promise((res) => {
            let listener = (key: any, exports: any) => {
                if (check(key, exports)) {
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
}

// This function is mostly from BetterDiscord
function patch(chunks: any, chunk: any) {
    const [, modules] = chunk;

    for (const key in modules) {
        const module = modules[key];

        modules[key] = (...args: [any, any, any]) => {
            let [, exports, require] = args;

            try {
                module.apply(null, args);

                for (let listener of [...Webpack.listeners]) listener(key, exports);
            } catch (error) {
                console.error(error);
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
