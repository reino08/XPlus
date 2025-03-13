import { patchHalves } from "../../patch.ts";
import { API } from "../api.ts";
import { extern_APIFetchUser, extern_ReactRouter } from "../externs.ts";
import { React } from "../react.ts";

const cache = {};

extern_ReactRouter.then((exports) => {
    const mark = name => exports[name].displayName = name;
    ["MemoryRouter", "Route", "Router", "StaticRouter", "Switch"].forEach(mark);

    patchHalves(exports.Switch.prototype, "render", undefined, (_, __, res) => {
        const original = res.props.children;
        res.props.children = function () {
            return [original.apply(this, arguments), React.createElement(Permalink)];
        }
    })

    function Permalink() {
        const user_id = exports.useRouteMatch("/i/perma/:id")?.params?.["id"];
        if (!user_id) return;

        const [name, setName] = React.useState();
        React.useEffect(() => {
            if (cache.hasOwnProperty(user_id))
                setName(cache[user_id]);
            else extern_APIFetchUser
                .then(x => x.ZP(API))
                .then(x => x.fetchOneUser({ user_id }))
                .then(x => setName(cache[user_id] = x.entities.users[user_id].screen_name));
        }, []);

        if (name)
            return React.createElement(exports.Redirect, { to: "/" + name });
    }
});
