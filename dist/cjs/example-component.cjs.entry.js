'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-a195db71.js');

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
