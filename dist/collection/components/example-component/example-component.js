import { Host, h } from "@stencil/core";
export class ExampleComponent {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "example-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["example-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["example-component.css"]
    }; }
}
