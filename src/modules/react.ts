import Webpack from "./webpack.ts";

export let React: any;
export let ReactDOM: any;
export let Link: (arg0: any, arg1: any) => any;
export let Wait: Promise<any>;

Wait = Promise.all([
    Webpack.getProps(x => x, "createElement")
        .then(exports => React = exports),
    Webpack.getProps(x => x, "createRoot")
        .then(exports => ReactDOM = exports),
    Webpack.getString("link", x => x?.e)
        .then(exports => Link = exports.e),
])
