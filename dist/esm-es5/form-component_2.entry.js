import { r as registerInstance, h, g as getElement } from './core-072cc3a2.js';
var MyName = /** @class */ (function () {
    function MyName(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Sets whether the form is a Step Form
         */
        this.stepForm = false;
    }
    MyName.prototype.handleSubmit = function (e) {
        e.preventDefault();
        console.log(this.value);
        console.log('this.el', this.el);
        // send data to our backend
    };
    MyName.prototype.handleChange = function (event) {
        this.value = event.target.value;
    };
    MyName.prototype.render = function () {
        var _this = this;
        return (h("form", { onSubmit: function (e) { return _this.handleSubmit(e); } }, h("form-input", { label: "First Name" }), h("form-input", { label: "Last Name" }), h("input", { type: "submit", value: "Submit" })));
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
        this.inputId = null;
        /**
         * The first name
         */
        this.label = null;
    }
    FormInput.prototype.handleChange = function (event) {
        this.value = event.target.value;
    };
    FormInput.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "form-field-wrappe" }, h("label", { htmlFor: this.inputId }, this.label), h("input", { id: this.inputId, type: "text", value: this.value, onInput: function (event) { return _this.handleChange(event); } })));
    };
    Object.defineProperty(FormInput, "style", {
        get: function () { return "input,label{display:block}input{font-size:16px;color:#00f}"; },
        enumerable: true,
        configurable: true
    });
    return FormInput;
}());
export { MyName as form_component, FormInput as form_input };
