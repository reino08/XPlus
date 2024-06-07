import { React } from "../modules/react.ts";
import Webpack from "../modules/webpack.ts";

type ColorMap = [string, [string, string][]][];

let themePromise = Webpack.getProps(x => x?.default, "theme");

let gate = false;
let setGate = false;
themePromise.then(exports => {
    // Keep our UI up to date with the rest of the page
    exports.default.onThemeChange(theme => {
        if (!gate) return;
        gate = false;

        document.documentElement.style.setProperty("--xp-accent", theme.colors[theme.primaryColorName]);
    });

    GM.getValue("xp-theme").then(value => {
        // There is a race condition here.
        // Either the page loads fast enough or the theme is never set.
        // There is no immediately obvious solution, 
        //   so it will not be implemented until there is a problem.
        setTimeout(() => {
            gate = true;
            exports.default.setPrimaryColor(value as string);
        }, 1_000);
    });
});

export default function ThemePicker() {
    let [theme, setTheme] = React.useState<any>(undefined);
    let [colors, setColors] = React.useState<ColorMap | undefined>(undefined);
    React.useEffect(() => void themePromise.then(exports => {
        setTheme(exports.default);
        setColors(mapColors(exports.default.theme.colors) as any);
    }), []);

    if (!theme) return <div>Theme data not found.</div>;

    return (<div id="xp-ui-theme-picker">
        {colors!.map(([name, list]) => (<div>
            {name}
            <div>
                {list.map(([key, value]) => (
                    <button
                        style={{ backgroundColor: value }}
                        onClick={() => {
                            gate = true;
                            theme.setPrimaryColor(key);
                            GM.setValue("xp-theme", key);
                        }}
                        title={key}
                    />
                ))}
            </div>
        </div>)) as any}
    </div>);
}

function mapColors(colors: any): ColorMap {
    return Object.keys(colors)
        .filter(x => x.endsWith("600"))
        .filter(x => !x.startsWith("primary"))
        .map(x => x.substring(0, x.length - 3))
        .map(x =>
            [x, Object.entries(colors)
                .filter(([key]) => key.startsWith(x))
                .map(([key, value]) => [key, value as string])]
        )
}
