import { a as patchEsm, b as bootstrapLazy } from './core-072cc3a2.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["example-component",[[1,"example-component"]]],["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1],"nickname":[1]}]]],["form-component_2",[[1,"form-component",{"stepForm":[4,"step-form"],"value":[32]}],[1,"form-input",{"inputId":[1,"input-id"],"label":[1],"value":[32]}]]]], options);
  });
};

export { defineCustomElements };
