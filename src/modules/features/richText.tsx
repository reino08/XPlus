import Webpack from "../webpack.ts";
import { React } from "../react.ts";
import { patchHalves } from "../../patch.ts";

// https://util.unicode.org/UnicodeJsps/confusables.jsp
const confusableMap = {
    a: "\u0430", A: "\u0410",
    b: "\u15af", B: "\u0392",
    c: "\u0441", C: "\u03f9",
    d: "\u0501", D: "\u13a0",
    e: "\u0435", E: "\u2d39",
    f: "\u1e9d", F: "\ua4dd",
    g: "\u0261", G: "\u13c0",
    h: "\u04bb", H: "\u0397",
    i: "\u0456", I: "\u0196",
    j: "\u0458", J: "\u037f",
    k: undefined, K: "\u041a",
    l: "\u04cf", L: "\u13de",
    m: "\u217f", M: "\u004d",
    n: "\u0578", N: "\u039d",
    o: "\u043e", O: "\u041e",
    p: "\u0440", P: "\u03a1",
    q: "\u051b", Q: "\u2d55",
    r: "\u0433", R: "\ua4e3",
    s: "\ua731", S: "\u0405",
    t: undefined, T: "\u03a4",
    u: "\u057d", U: "\u054d",
    v: "\u1d20", V: "\u22c1",
    w: "\u1d21", W: "\u051c",
    x: "\u0445", X: "\u03a7",
    y: "\u0443", Y: "\u03a5",
    z: "\u1d22", Z: "\u0396",
};
const unconfusableMap = Object.entries(confusableMap).reduce((x, [key, value]) => (x[value as any] = key, x), {});

// Letters are numbers, so they can be converted with math
// The numbers have their offset extracted by removing the start of their block, 
//  so `g` becomes 0x06 (its place in the alphabet) instead of 0x67 
//  This can be represented as either 'g' - 'a' or 0x67 - 0x61.
//  However JavaScript does not allow for character literals to be used as numbers,
//    so you would have to use a lower level language to write 'g' - 'a'.
// Next, the base codepoint is added to move them into another range
//  so 0x06 gets added to 0x1D552 to make 0x1D558, which is `Double-Struck Small G`
// This process can be reversed to go back to regular ASCII letters.
// There is an exclude component to one of the ranges because some double-struck capital letters do not exist.
// The bypass map could not have used this process as it is not contiguous. The letters were manually chosen.
const ranges: [description: string, [start: number, end: number, codepoint: number, exclude?: number[]][]][] = [
    ["B", [[0x61, 0x7A, 0x1D41A], [0x41, 0x5A, 0x1D400]]],
    ["I", [[0x61, 0x7A, 0x1D44E], [0x41, 0x5A, 0x1D434]]],
    ["BI", [[0x61, 0x7A, 0x1D482], [0x41, 0x5A, 0x1D468]]],
    ["DS", [[0x61, 0x7A, 0x1D552], [0x41, 0x5A, 0x1D538, [2, 7, 13, 15, 16, 17, 25]]]],
];

Webpack.getString("_handleEditorContainerRef", x => x?.prototype?.render).then(exports => {
    patchHalves(exports.prototype, "render", undefined, (self, _, res) => {
        res.props.children.unshift(<div className="xp-rich-text-editor" onMouseDown={e => e.preventDefault()}>
            <button onClick={() => replace(char => getOriginal(char))}>R</button>
            <button onClick={() => replaceMap(confusableMap)}>C</button>
            {ranges.map(([desc, ranges]) => <button onClick={() => replaceRange(ranges)}>{desc}</button>)}
        </div>);

        // TODO: support cross-element selections
        function getSelection(): string {
            let selection = self.props.editorState.getSelection();
            let start = selection.getStartOffset();
            let end = selection.getEndOffset();

            let text = self.props.editorState.getCurrentContent().getBlockForKey(selection.getAnchorKey()).getText();
            if (start == end) return "";

            return text.slice(start, end);
        }

        function getOriginal(char: string): string {
            let original: string | undefined;
            if (original = unconfusableMap[char])
                return original;

            let codepoint = char.codePointAt(0);
            if (!codepoint) return char;

            for (let range of ranges) {
                for (let [start, end, base] of range[1]) {
                    if (codepoint >= base && codepoint <= base + end - start)
                        return String.fromCodePoint(codepoint - base + start);
                }
            }

            return char;
        }

        function replace(map: (value: string) => string) {
            self.props.handlePastedText(
                Array.from(getSelection()).map(map).join(""), "", self.props.editorState
            );
        }

        function replaceMap(map: {}) {
            replace(char => {
                let original = getOriginal(char);
                return map[original] || original;
            });
        }

        function replaceRange(ranges: [start: number, end: number, codepoint: number, exclude?: number[]][]) {
            replace(char => {
                let codepoint = getOriginal(char).codePointAt(0);
                if (!codepoint) return char;
                console.log(codepoint)

                for (let [start, end, base, exclude] of ranges) {
                    if (codepoint < start || codepoint > end) continue;
                    if (exclude && exclude.includes(codepoint - start)) continue;
                    return String.fromCodePoint(codepoint + base - start);
                }

                return char;
            });
        }
    });
});
