'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-a195db71.js');

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

const MyComponent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return (core.h("div", null, core.h("h2", null, "First component test ", this.getText()), core.h("h3", null, "Nickname: ", this.nickname)));
    }
    static get style() { return ""; }
};

exports.my_component = MyComponent;
