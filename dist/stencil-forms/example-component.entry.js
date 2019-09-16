import { r as registerInstance, h, H as Host } from './core-67a2b5f5.js';

const ExampleComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { ExampleComponent as example_component };
