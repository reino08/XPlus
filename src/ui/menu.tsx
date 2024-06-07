import { React } from "../modules/react.ts"
import { Filters } from "./filters.tsx";
import FollowList from "./followList.tsx";
import ThemePicker from "./themePicker.tsx";

let tabs: [string, Function][] = [
    ["Filters", Filters],
    ["Follow List", FollowList],
    ["Theme Picker", ThemePicker],
]

export default function Menu(props: any) {
    let [tab, setTab] = React.useState(-1);

    const Body = tabs[tab]?.[1] as any;
    return (<>
        <div id="xp-ui-bar">
            <button style={{ marginBottom: "8px" }} onClick={props.hide}>Hide</button>
            {tabs.map(([name], index) => <button onClick={() => setTab(index)}>{name}</button>)}
        </div>

        {tab == -1 ? null : <div id="xp-ui-body"><Body /></div>}
    </>)
}
