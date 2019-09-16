'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-65ae6c2c.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["example-component.cjs",[[1,"example-component"]]],["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1],"nickname":[1]}]]],["form-component_2.cjs",[[1,"form-component",{"stepForm":[4,"step-form"],"value":[32]}],[1,"form-input",{"inputId":[1,"input-id"],"label":[1],"value":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
