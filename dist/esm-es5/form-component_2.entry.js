import { r as registerInstance, h, g as getElement } from './core-322d0d6a.js';
var MyName = /** @class */ (function () {
    function MyName(hostRef) {
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
    MyName.prototype.handleSubmit = function (e) {
        e.preventDefault();
        var sForm = document.getElementById('s-form');
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
    };
    MyName.prototype.handleChange = function (event) {
        this.value = event.target.value;
    };
    MyName.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "form-wrapper" }, h("form", { id: "s-form", onSubmit: function (e) { return _this.handleSubmit(e); } }, h("label", { class: "block mt-4" }, h("span", { class: "text-gray-700" }, "Select A Program"), h("select", { class: "form-select mt-1 block w-full" }, h("option", null, "Select"), h("option", null, "Program A"), h("option", null, "Program B"), h("option", null, "Program C"), h("option", null, "Program D"))), h("form-input", { "input-id": "firstName", label: "First Name" }), h("form-input", { "input-id": "lastName", label: "Last Name" }), h("button", { id: "submitButton", class: "form-submit-button", type: "submit" }, "Submit"))));
    };
    Object.defineProperty(MyName.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyName, "style", {
        get: function () { return ":host{display:block}.form-submit-button{background-color:#4299e1;color:#fff;font-weight:700;padding:.5rem 1rem;border-radius:9999px;cursor:pointer}.form-submit-button:hover{background-color:#2b6cb0}"; },
        enumerable: true,
        configurable: true
    });
    return MyName;
}());
var FormInput = /** @class */ (function () {
    function FormInput(hostRef) {
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
    FormInput.prototype.handleChange = function (event) {
        this.value = event.target.value;
    };
    FormInput.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "form-field-wrapper" }, h("label", { htmlFor: this.inputId }, this.label), h("input", { id: this.inputId, name: this.inputId, type: "text", class: "form-input", value: this.value, onInput: function (event) { return _this.handleChange(event); } })));
    };
    Object.defineProperty(FormInput, "style", {
        get: function () { return "label{font-weight:700}input,label{display:block}input{font-size:16px;color:#00f;color:#1a202c;line-height:1.25}"; },
        enumerable: true,
        configurable: true
    });
    return FormInput;
}());
export { MyName as form_component, FormInput as form_input };
