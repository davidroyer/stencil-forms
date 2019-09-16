'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-65ae6c2c.js');

const ExampleComponent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, null, core.h("slot", null)));
    }
    static get style() { return ":host{display:block}"; }
};

exports.example_component = ExampleComponent;
