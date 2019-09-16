import { h } from "@stencil/core";
export class MyName {
    constructor() {
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
        return (h("form", { onSubmit: e => this.handleSubmit(e) },
            h("form-input", { label: "First Name" }),
            h("form-input", { label: "Last Name" }),
            h("input", { type: "submit", value: "Submit" })));
    }
    static get is() { return "form-component"; }
    static get encapsulation() { return "shadow"; }
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
        "value": {}
    }; }
    static get elementRef() { return "el"; }
}
