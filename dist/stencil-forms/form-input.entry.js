import { r as registerInstance, h } from './core-67a2b5f5.js';

const FormInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The input value
         */
        this.value = '';
        this.inputId = null;
        /**
         * The first name
         */
        this.label = null;
    }
    handleChange(event) {
        this.value = event.target.value;
    }
    render() {
        return (h("div", { class: "form-field-wrapper" }, h("label", { htmlFor: this.inputId }, this.label), h("input", { id: this.inputId, name: this.inputId, type: "text", value: this.value, onInput: event => this.handleChange(event) })));
    }
    static get style() { return "label {\n  display: block;\n}\n\ninput {\n  font-size: 16px;\n  color: blue;\n  display: block;\n}"; }
};

export { FormInput as form_input };
