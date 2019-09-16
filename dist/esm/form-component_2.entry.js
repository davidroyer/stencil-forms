import { r as registerInstance, h, g as getElement } from './core-322d0d6a.js';

const MyName = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Sets whether the form is a Step Form
         */
        this.stepForm = false;
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.value);
        console.log('this.el', this.el);
        // send data to our backend
    }
    handleChange(event) {
        this.value = event.target.value;
    }
    render() {
        return (h("form", { onSubmit: e => this.handleSubmit(e) }, h("form-input", { label: "First Name" }), h("form-input", { label: "Last Name" }), h("input", { type: "submit", value: "Submit" })));
    }
    get el() { return getElement(this); }
    static get style() { return ":host{display:block}"; }
};

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
        return (h("div", { class: "form-field-wrappe" }, h("label", { htmlFor: this.inputId }, this.label), h("input", { id: this.inputId, type: "text", value: this.value, onInput: event => this.handleChange(event) })));
    }
    static get style() { return "input,label{display:block}input{font-size:16px;color:#00f}"; }
};

export { MyName as form_component, FormInput as form_input };
