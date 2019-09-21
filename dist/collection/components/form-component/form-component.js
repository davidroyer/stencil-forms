import { h } from "@stencil/core";
export class MyName {
    constructor() {
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
        return (h("div", { class: "form-wrapper" },
            h("form", { id: "s-form", onSubmit: e => this.handleSubmit(e) },
                h("form-input", { "input-id": "firstName", label: "First Name" }),
                h("form-input", { "input-id": "lastName", label: "Last Name" }),
                h("button", { id: "submitButton", class: "form-submit-button", type: "submit" }, "Submit"))));
    }
    static get is() { return "form-component"; }
    static get originalStyleUrls() { return {
        "$": ["form-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["form-component.css"]
    }; }
    static get properties() { return {
        "stepForm": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets whether the form is a Step Form"
            },
            "attribute": "step-form",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "value": {},
        "formData": {}
    }; }
    static get elementRef() { return "el"; }
}
