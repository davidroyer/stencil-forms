import { r as registerInstance, h, H as Host } from './core-072cc3a2.js';

const ExampleComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return ":host{display:block}"; }
};

export { ExampleComponent as example_component };
