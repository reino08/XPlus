const cache = {};
const Prefix = Symbol("Prefix");
const Listeners = Symbol("Listeners");
const Deactivated = Symbol("Deactivated");

type Listener = (key: string, value: any) => void;

export default class Storage {
    readonly [Prefix]: string;
    readonly [Listeners]: Map<string, Listener[]> = new Map();

    protected constructor(prefix: string = '') {
        prefix += '-';
        prefix = prefix.replace(/-{2,}/g, '-');
        prefix = prefix == '-' ? '' : prefix;
        this[Prefix] = prefix;
        this[Deactivated] = true;

        return new Proxy(this, {
            get(target, prop) {
                if (typeof prop == "string") {
                    const key = target.#key(prop);

                    let value = cache[key];
                    if (value) return value;

                    value = GM_getValue(key);
                    if (value !== undefined)
                        return cache[key] = value;
                }

                return Reflect.get(target, prop);
            },
            set(target, prop, value) {
                if (target.hasOwnProperty(Deactivated) || typeof prop == "symbol")
                    return Reflect.set(target, prop, value);

                const key = target.#key(prop);

                GM.setValue(key, cache[key] = value);
                target[Listeners].get(prop)?.forEach(x => x(prop, value));
                return true;
            },
        });
    }

    #key(prop: string) {
        return this[Prefix] + prop.replace(/_/g, '-')
    }

    save(prop: string) {
        const key = this.#key(prop);
        GM.setValue(key, cache[key]);
    }

    subscribe(prop: string, listener: Listener) {
        const listeners = this[Listeners];
        if (listeners.has(prop))
            listeners.get(prop).push(listener);
        else listeners.set(prop, [listener]);
    }

    static new<T extends Storage>(prefix: string = ""): T {
        const storage = new this(prefix) as T;
        delete storage[Deactivated];
        return storage;
    }
}
