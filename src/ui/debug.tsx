import { React } from "../modules/react.ts";
import * as externs from "../modules/externs.ts";

let tabs: [string, Function][] = [
    ["Externs", Externs],
]

export default function Debug() {
    let [tab, setTab] = React.useState(0);

    const Body = tabs[tab]?.[1] as any;
    return (<>
        <div id="xp-ui-debug-tabs">
            {tabs.map(([name], index) => <button onClick={() => setTab(index)}>{name}</button>)}
        </div>

        <div id="xp-ui-debug">
            <Body />
        </div>
    </>);
}

enum State {
    Loading,
    Succeeded,
    Failed
}

// This is written very poorly.
function Externs() {
    let [states, setStates] = React.useState({});

    React.useEffect(() => {
        setStates(states = Object.keys(externs).map(key => key.substring(7)).reduce((x, key) => (x[key] = State.Loading, x), {}))

        const update = (key: string, value: State) => setStates(states = { ...states, [key]: value })
        for (const [key, promise] of Object.entries(externs)) {
            const boundUpdate = update.bind(this, key.substring(7))
            promise.then(boundUpdate.bind(this, State.Succeeded), boundUpdate.bind(this, State.Failed));
        }
    }, []);

    return (<div id="xp-ui-debug-externs">
        {Object.entries(states).map(([key, state]) => (state = State[state as State], <div>
            {key}:
            <br />
            <span className={(state as string).toLowerCase()}>
                {state as string}
            </span>
        </div>))}
    </div>);
}
