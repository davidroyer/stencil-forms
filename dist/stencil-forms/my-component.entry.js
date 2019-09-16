import { r as registerInstance, h } from './core-67a2b5f5.js';

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return (h("div", null, h("h2", null, "First component test ", this.getText()), h("h3", null, "Nickname: ", this.nickname)));
    }
    static get style() { return ""; }
};

export { MyComponent as my_component };
