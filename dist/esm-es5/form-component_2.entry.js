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
        return (h("div", { class: "form-wrapper" }, h("form", { id: "s-form", onSubmit: function (e) { return _this.handleSubmit(e); } }, h("form-input", { "input-id": "firstName", label: "First Name" }), h("form-input", { "input-id": "lastName", label: "Last Name" }), h("input", { id: "submitButton", type: "submit", value: "Submit" }))));
    };
    Object.defineProperty(MyName.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyName, "style", {
        get: function () { return ":host{display:block}"; },
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
        return (h("div", { class: "form-field-wrapper" }, h("label", { htmlFor: this.inputId }, this.label), h("input", { id: this.inputId, name: this.inputId, type: "text", value: this.value, onInput: function (event) { return _this.handleChange(event); } })));
    };
    Object.defineProperty(FormInput, "style", {
        get: function () { return "input,label{display:block}input{font-size:16px;color:#00f}"; },
        enumerable: true,
        configurable: true
    });
    return FormInput;
}());
export { MyName as form_component, FormInput as form_input };
