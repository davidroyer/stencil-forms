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
        return (core.h("div", { class: "form-wrapper" }, core.h("form", { id: "s-form", onSubmit: e => this.handleSubmit(e) }, core.h("label", { class: "block mt-4" }, core.h("span", { class: "text-gray-700" }, "Select A Program"), core.h("select", { class: "form-select mt-1 block w-full" }, core.h("option", null, "Select"), core.h("option", null, "Program A"), core.h("option", null, "Program B"), core.h("option", null, "Program C"), core.h("option", null, "Program D"))), core.h("form-input", { "input-id": "firstName", label: "First Name" }), core.h("form-input", { "input-id": "lastName", label: "Last Name" }), core.h("button", { id: "submitButton", class: "form-submit-button", type: "submit" }, "Submit"))));
    }
    get el() { return core.getElement(this); }
    static get style() { return ":host{display:block}.form-submit-button{background-color:#4299e1;color:#fff;font-weight:700;padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;padding-right:1rem;border-radius:9999px;cursor:pointer}.form-submit-button:hover{background-color:#2b6cb0}"; }
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
        return (core.h("div", { class: "form-field-wrapper" }, core.h("label", { htmlFor: this.inputId }, this.label), core.h("input", { id: this.inputId, name: this.inputId, type: "text", class: "form-input", value: this.value, onInput: event => this.handleChange(event) })));
    }
    static get style() { return "label{font-weight:700}input,label{display:block}input{font-size:16px;color:#00f;color:#1a202c;line-height:1.25}"; }
};

exports.form_component = MyName;
exports.form_input = FormInput;
