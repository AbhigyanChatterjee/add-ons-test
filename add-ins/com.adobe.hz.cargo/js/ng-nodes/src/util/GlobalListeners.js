class GlobalListeners {
    constructor() {
        this.map = new WeakMap()
    }

    add(target, name, listener) {
        const container = this.getContainer(target)
        container[name] = listener
        return listener
    }

    remove(target, name) {
        const container = this.getContainer(target)
        const listener = container[name]
        delete container[name]
        return listener
    }

    getContainer(target) {
        if (!this.map.has(target)) {
            const container = {}
            this.map.set(target, container)
            return container
        }

        return this.map.get(target)
    }
}

export { GlobalListeners }
