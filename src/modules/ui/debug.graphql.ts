import Webpack from "../webpack.ts";
import { send, subscribe } from "./commands.ts";

const endpoints = {};

Webpack.get(exports => {
    if (exports?.hasOwnProperty("operationName"))
        endpoints[exports.operationName] = exports;
    return false;
});

subscribe("debug.graphql.get", () => send("debug.graphql.set", endpoints));
