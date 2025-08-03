import Storage from "./storage.ts";

class Settings extends Storage {
    draftjs_vowel_replacer: boolean = false;
    trackers: string[] = [];
    hidden_tabs: string | string[] = [];
    hidden_grok: boolean = false;
    hidden_dms: boolean = false;
    profile_preset = {
        url: "",
        name: "",
        description: "",
        location: "",
    };
}

export const settings: Settings = Settings.new("xp");
