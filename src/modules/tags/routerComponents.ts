import { extern_ReactRouter } from "../externs";

extern_ReactRouter.then(exports => {
    // TODO: dynamic
    ["MemoryRouter", "Route", "Router", "StaticRouter", "Switch"]
        .forEach(name => exports[name].displayName = name);
});
