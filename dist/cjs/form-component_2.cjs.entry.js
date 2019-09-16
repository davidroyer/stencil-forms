'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-a195db71.js');

const MyName = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         * Sets whether the form is a Step Form
         */
        this.stepForm = false;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.formData = {
            firstName: '',
            lastName: '',
        };
    }
    handleSubmit(e) {
        e.preventDefault();
        const sForm = document.getElementById('s-form');
        console.log('Form:', sForm);
        // const FormElements = Array.from(sForm.elements);
        // FormElements.forEach(field => {
        //     const newObj = { [field.id]: field.value };
        //     this.formData = { ...this.formData, ...newObj };
        // });
        // const { $elm$, ...goodData } = this.formData;
        // this.formData = { ...goodData };
        // console.info('Form Data', this.formData);
        // alert('See Values In Console.');
        // send data to our backend
    }
    handleChange(event) {
        this.value = event.target.value;
    }
    render() {
        return (core.h("div", { class: "form-wrapper" }, core.h("form", { id: "s-form", onSubmit: e => this.handleSubmit(e) }, core.h("form-input", { "input-id": "firstName", label: "First Name" }), core.h("form-input", { "input-id": "lastName", label: "Last Name" }), core.h("input", { id: "submitButton", type: "submit", value: "Submit" }))));
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
        /**
         * The `id` for the input
         */
        this.inputId = null;
        /**
         * The label text
         */
        this.label = null;
    }
    handleChange(event) {
        this.value = event.target.value;
    }
    render() {
        return (core.h("div", { class: "form-field-wrapper" }, core.h("label", { htmlFor: this.inputId }, this.label), core.h("input", { id: this.inputId, name: this.inputId, type: "text", value: this.value, onInput: event => this.handleChange(event) })));
    }
    static get style() { return "input,label{display:block}input{font-size:16px;color:#00f}"; }
};

exports.form_component = MyName;
exports.form_input = FormInput;
