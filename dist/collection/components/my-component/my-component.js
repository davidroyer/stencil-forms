import { h } from "@stencil/core";
import { format } from '../../utils/utils';
export class MyComponent {
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return (h("div", null,
            h("h2", null,
                "First component test ",
                this.getText()),
            h("h3", null,
                "Nickname: ",
                this.nickname)));
    }
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["my-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["my-component.css"]
    }; }
    static get properties() { return {
        "first": {
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
            "attribute": "first",
            "reflect": false
        },
        "middle": {
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
                "text": "The middle name"
            },
            "attribute": "middle",
            "reflect": false
        },
        "last": {
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
                "text": "The last name"
            },
            "attribute": "last",
            "reflect": false
        },
        "nickname": {
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
                "text": "The nickname"
            },
            "attribute": "nickname",
            "reflect": false
        }
    }; }
}
