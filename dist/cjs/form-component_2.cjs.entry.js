'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-65ae6c2c.js');

const MyName = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
        return (core.h("form", { onSubmit: e => this.handleSubmit(e) }, core.h("form-input", { label: "First Name" }), core.h("form-input", { label: "Last Name" }), core.h("input", { type: "submit", value: "Submit" })));
    }
    get el() { return core.getElement(this); }
    static get style() { return ":host{display:block}"; }
};

const FormInput = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
        return (core.h("div", { class: "form-field-wrappe" }, core.h("label", { htmlFor: this.inputId }, this.label), core.h("input", { id: this.inputId, type: "text", value: this.value, onInput: event => this.handleChange(event) })));
    }
    static get style() { return "input,label{display:block}input{font-size:16px;color:#00f}"; }
};

exports.form_component = MyName;
exports.form_input = FormInput;
