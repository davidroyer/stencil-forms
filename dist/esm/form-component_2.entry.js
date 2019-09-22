import { r as registerInstance, h, g as getElement } from './core-322d0d6a.js';

const MyName = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { class: "form-wrapper" }, h("form", { id: "s-form", onSubmit: e => this.handleSubmit(e) }, h("label", { class: "block mt-4" }, h("span", { class: "text-gray-700" }, "Select A Program"), h("select", { class: "form-select mt-1 block w-full" }, h("option", null, "Select"), h("option", null, "Program A"), h("option", null, "Program B"), h("option", null, "Program C"), h("option", null, "Program D"))), h("form-input", { "input-id": "firstName", label: "First Name" }), h("form-input", { "input-id": "lastName", label: "Last Name" }), h("button", { id: "submitButton", class: "form-submit-button", type: "submit" }, "Submit"))));
    }
    get el() { return getElement(this); }
    static get style() { return ":host{display:block}.form-submit-button{background-color:#4299e1;color:#fff;font-weight:700;padding:.5rem 1rem;border-radius:9999px;cursor:pointer}.form-submit-button:hover{background-color:#2b6cb0}"; }
};

const FormInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { class: "form-field-wrapper" }, h("label", { htmlFor: this.inputId }, this.label), h("input", { id: this.inputId, name: this.inputId, type: "text", class: "form-input", value: this.value, onInput: event => this.handleChange(event) })));
    }
    static get style() { return "label{font-weight:700}input,label{display:block}input{font-size:16px;color:#00f;color:#1a202c;line-height:1.25}"; }
};

export { MyName as form_component, FormInput as form_input };
