import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-67a2b5f5.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["form-component",[[0,"form-component",{"stepForm":[4,"step-form"],"value":[32],"formData":[32]}]]],["example-component",[[1,"example-component"]]],["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1],"nickname":[1]}]]],["form-input",[[0,"form-input",{"inputId":[1,"input-id"],"label":[1],"value":[32]}]]]], options);
});
