import { Element, Component, State, h, Prop } from '@stencil/core';


@Component({
  tag: 'form-component',
  styleUrl: 'form-component.css',
  shadow: true
})
export class MyName {


  @Prop() stepForm: boolean = false
  
  /**
   * 2. Reference to host HTML element.
   * Inlined decorator
   */
  @Element() el: HTMLElement;
 
  @State() value: string;

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.value);
    console.log('this.el', this.el);
    // send data to our backend
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>

        <form-input label="First Name" />
        <form-input label="Last Name" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}