import { React } from "../react.ts";
import { DraftJSEditorPatch } from "../patches.ts";
import { patchHalves } from "../../patch.ts";
import { confusableMap, unconfusableMap } from "./richText.ts";
import { settings } from "../../settings.ts";

DraftJSEditorPatch.then((patch) => patch.subscribe(patch.post, (self, _, res) => {
    patchHalves(self, "update", (_, [state]) => {
        if (!settings.draftjs_vowel_replacer) return;

        let blockMap = state._immutable.currentContent.blockMap;
        const iter = blockMap.entries();

        let done: boolean, entry: [string, any];
        while (({ done, value: entry } = iter.next(), !done)) {
            let [key, value] = entry;
            value = value.set("text", replace(value.text));
            blockMap = blockMap.set(key, value);
        }

        state._immutable = state._immutable.set("currentContent", state._immutable.currentContent.set("blockMap", blockMap));
    });

    res.props.children.unshift(React.createElement("div", { className: "xp-draftjs-vowel-replacer", title: "Automatically replaces vowels with confusables to bypass word filters." },
        React.createElement("label", null, "Bypass"),
        React.createElement("input", {
            type: "checkbox",
            defaultChecked: settings.draftjs_vowel_replacer,
            onChange: event => {
                settings.draftjs_vowel_replacer = event.currentTarget.checked;
                self._onBlur(event);
            }
        }),
    ));
}, -200));

// X uses a whitelist of TLDs instead of checking the length
const websiteRegex = /[\w]+\.[a-z]{2,}/gi;

function replace(str: string) {
    // Return the string to normal, split it at every word, then if a word isn't blacklisted, confuse the vowels in it
    return str
        .split("")
        .map(char => unconfusableMap[char] || char)
        .join("")
        .split(" ")
        .map((word) => blacklisted(word)
            ? word
            : word.replace(/[aiueo]/gi, char => confusableMap[char]))
        .join(" ");
}

function blacklisted(word: string) {
    return word.startsWith("@") // Mentions must have a whitespace before the @ 
        || websiteRegex.test(word)
}
