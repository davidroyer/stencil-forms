import { h } from "@stencil/core";
/**
 * @description
 * This is some description
 */
export class FormInput {
    constructor() {
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
        return (h("div", { class: "form-field-wrappe" },
            h("label", { htmlFor: this.inputId }, this.label),
            h("input", { id: this.inputId, type: "text", value: this.value, onInput: event => this.handleChange(event) })));
    }
    static get is() { return "form-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["form-input.css"]
    }; }
    static get styleUrls() { return {
        "$": ["form-input.css"]
    }; }
    static get properties() { return {
        "inputId": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "input-id",
            "reflect": false,
            "defaultValue": "null"
        },
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The first name"
            },
            "attribute": "label",
            "reflect": false,
            "defaultValue": "null"
        }
    }; }
    static get states() { return {
        "value": {}
    }; }
}
