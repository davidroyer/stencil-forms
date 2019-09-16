import { r as registerInstance, h, H as Host } from './core-072cc3a2.js';
var ExampleComponent = /** @class */ (function () {
    function ExampleComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    ExampleComponent.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    Object.defineProperty(ExampleComponent, "style", {
        get: function () { return ":host{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return ExampleComponent;
}());
export { ExampleComponent as example_component };
