import Webpack from "./webpack.ts";

export let React: any;
export let ReactDOM: any;
export let Link: (arg0: any, arg1: any) => any;
export let Wait: Promise<any>;

Wait = Promise.all([
    Webpack.get(exports =>
        typeof exports == "object"
        && "createElement" in exports
        && "cloneElement" in exports)
        .then(exports => React = exports),
    Webpack.get(exports =>
        typeof exports == "object"
        && "createRoot" in exports)
        .then(exports => ReactDOM = exports),
    Webpack.getString("link", x => x?.e)
        .then(exports => Link = exports.e),
])
