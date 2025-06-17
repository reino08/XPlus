import { API } from "../api.ts";
import { extern_APIFetchUser, extern_ReactRouter } from "../externs.ts";
import { RunApplicationPatch } from "../patches.ts";
import { React } from "../react.ts";

// why is it cached?
const cache = {};

extern_ReactRouter.then(exports => {
    RunApplicationPatch.then(patch => patch.subscribe(patch.pre, (_self, [_appKey, appParameters]) => {
        const routes = appParameters.initialProps.routerProps.children.props.children.props.children;
        routes[1].props.children[1].push(React.createElement(exports.Route, {
            exact: true,
            path: "/i/perma/:user_id",
        }, React.createElement(Permalink)));
    }));

    function Permalink() {
        const { user_id } = exports.useParams<{ user_id: string }>();
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
