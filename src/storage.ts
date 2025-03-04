const cache = {};
const deactivated = Symbol("Deactivated");

export default class Storage {
    readonly #prefix: string;

    protected constructor(prefix: string = '') {
        prefix += '-';
        prefix = prefix.replace(/-{2,}/g, '-');
        prefix = prefix == '-' ? '' : prefix;
        this.#prefix = prefix;
        this[deactivated] = true;

        return new Proxy(this, {
            get(target, prop) {
                if (typeof prop == "symbol")
                    throw "Cannot persist with symbol key";
                const key = target.#key(prop);

                let value = cache[key];
                if (value) return value;

                value = GM_getValue(key);
                if (value !== undefined)
                    return cache[key] = value;

                return Reflect.get(target, prop);
            },
            set(target, prop, value) {
                if (target.hasOwnProperty(deactivated))
                    return Reflect.set(target, prop, value);

                if (typeof prop == "symbol")
                    throw "Cannot persist with symbol key";
                const key = target.#key(prop);

                GM.setValue(key, cache[key] = value);
                return true;
            },
        });
    }

    #key(prop: string) {
        return this.#prefix + prop.replace(/_/g, '-')
    }

    save(prop: string) {
        const key = this.#key(prop);
        GM.setValue(key, cache[key]);
    }

    static new<T extends Storage>(prefix: string = ""): T {
        const storage = new this(prefix) as T;
        delete storage[deactivated];
        return storage;
    }
}
