/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface ExampleComponent {}
  interface FormComponent {
    /**
    * Sets whether the form is a Step Form
    */
    'stepForm': boolean;
  }
  interface FormInput {
    'inputId': string;
    /**
    * The first name
    */
    'label': string;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
    /**
    * The nickname
    */
    'nickname': string;
  }
}

declare global {


  interface HTMLExampleComponentElement extends Components.ExampleComponent, HTMLStencilElement {}
  var HTMLExampleComponentElement: {
    prototype: HTMLExampleComponentElement;
    new (): HTMLExampleComponentElement;
  };

  interface HTMLFormComponentElement extends Components.FormComponent, HTMLStencilElement {}
  var HTMLFormComponentElement: {
    prototype: HTMLFormComponentElement;
    new (): HTMLFormComponentElement;
  };

  interface HTMLFormInputElement extends Components.FormInput, HTMLStencilElement {}
  var HTMLFormInputElement: {
    prototype: HTMLFormInputElement;
    new (): HTMLFormInputElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    'example-component': HTMLExampleComponentElement;
    'form-component': HTMLFormComponentElement;
    'form-input': HTMLFormInputElement;
    'my-component': HTMLMyComponentElement;
  }
}

declare namespace LocalJSX {
  interface ExampleComponent extends JSXBase.HTMLAttributes<HTMLExampleComponentElement> {}
  interface FormComponent extends JSXBase.HTMLAttributes<HTMLFormComponentElement> {
    /**
    * Sets whether the form is a Step Form
    */
    'stepForm'?: boolean;
  }
  interface FormInput extends JSXBase.HTMLAttributes<HTMLFormInputElement> {
    'inputId'?: string;
    /**
    * The first name
    */
    'label'?: string;
  }
  interface MyComponent extends JSXBase.HTMLAttributes<HTMLMyComponentElement> {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
    /**
    * The nickname
    */
    'nickname'?: string;
  }

  interface IntrinsicElements {
    'example-component': ExampleComponent;
    'form-component': FormComponent;
    'form-input': FormInput;
    'my-component': MyComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


