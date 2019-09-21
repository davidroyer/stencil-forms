import { Component, Prop, h, State } from '@stencil/core';

/**
 * @description
 * This is some description
 */

@Component({
    tag: 'form-input',
    styleUrl: 'form-input.css',
    // shadow: true,
})
export class FormInput {
    /**
     * The input value
     */
    @State() value = '';

    /**
     * The `id` for the input
     */
    @Prop() inputId: string = null;

    /**
     * The label text
     */
    @Prop() label: string = null;

    handleChange(event) {
        this.value = event.target.value;
    }

    render() {
        return (
            <div class="form-field-wrapper">
                <label htmlFor={this.inputId}>{this.label}</label>
                <input
                    id={this.inputId}
                    name={this.inputId}
                    type="text"
                    class="form-input"
                    value={this.value}
                    onInput={event => this.handleChange(event)}
                />
            </div>
        );
    }
}
