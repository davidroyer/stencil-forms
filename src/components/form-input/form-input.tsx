import { Component, Prop, h, State } from "@stencil/core";

/**
 * @description
 * This is some description
 */

@Component({
  tag: "form-input",
  styleUrl: "form-input.css",
  shadow: true
})


export class FormInput {
  
  /**
   * The input value
   */
  @State() value: string = '';
  
  /**
   * The first name
   */
  @Prop() label: string = null

  handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    return (
      <label>
        {this.label}
       <input type="text" value={this.value} onInput={event => this.handleChange(event)} />
      </label>
    );
  }
}
