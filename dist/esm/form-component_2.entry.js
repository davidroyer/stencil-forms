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
        return (h("div", { class: "form-wrapper" }, h("form", { id: "s-form", onSubmit: e => this.handleSubmit(e) }, h("form-input", { "input-id": "firstName", label: "First Name" }), h("form-input", { "input-id": "lastName", label: "Last Name" }), h("input", { id: "submitButton", type: "submit", value: "Submit" }))));
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
        return (h("div", { class: "form-field-wrapper" }, h("label", { htmlFor: this.inputId }, this.label), h("input", { id: this.inputId, name: this.inputId, type: "text", value: this.value, onInput: event => this.handleChange(event) })));
    }
    static get style() { return "input,label{display:block}input{font-size:16px;color:#00f}"; }
};

export { MyName as form_component, FormInput as form_input };
