import Storage from "./storage.ts";

class Settings extends Storage {
    draftjs_vowel_replacer = false;
    trackers: string[] = [];
    hidden_tabs: string | string[] = [];
}

export const settings: Settings = Settings.new("xp");
