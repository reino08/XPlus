import * as ReactTypes from "react";
import * as ReactDOMTypes from "react-dom";
import Webpack from "./webpack.ts";

export let React: typeof ReactTypes;
export let ReactDOM: typeof ReactDOMTypes;
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
