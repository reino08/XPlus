import Storage from "./storage.ts";

class Settings extends Storage {
    draftjs_vowel_replacer = false;
    trackers: string[] = [];
    hidden_tabs: string | string[] = [];
    hidden_grok: boolean = false;
    hidden_dms: boolean = false;
}

export const settings: Settings = Settings.new("xp");
