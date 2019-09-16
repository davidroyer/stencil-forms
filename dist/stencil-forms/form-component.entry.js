import { r as registerInstance, h, c as getElement } from './core-67a2b5f5.js';

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
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { MyName as form_component };
