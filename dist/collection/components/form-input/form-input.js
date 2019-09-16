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
        return (h("div", { class: "form-field-wrapper" },
            h("label", { htmlFor: this.inputId }, this.label),
            h("input", { id: this.inputId, name: this.inputId, type: "text", value: this.value, onInput: event => this.handleChange(event) })));
    }
    static get is() { return "form-input"; }
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
                "text": "The `id` for the input"
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
                "text": "The label text"
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
