import { Element, Component, State, h, Prop } from '@stencil/core';

@Component({
    tag: 'form-component',
    styleUrl: 'form-component.css',
    // shadow: true,
})
export class MyName {
    /**
     * Sets whether the form is a Step Form
     */
    @Prop() stepForm = false;

    /**
     * 2. Reference to host HTML element.
     * Inlined decorator
     */
    @Element() el: HTMLElement;

    @State() value: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @State() formData: Record<string, string> = {
        firstName: '',
        lastName: '',
    };

    handleSubmit(e) {
        e.preventDefault();
        const sForm = document.getElementById('s-form');
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
    }

    handleChange(event) {
        this.value = event.target.value;
    }

    render() {
        return (
            <div class="form-wrapper">
                <form id="s-form" onSubmit={e => this.handleSubmit(e)}>
                    <form-input input-id="firstName" label="First Name" />
                    <form-input input-id="lastName" label="Last Name" />
                    <button id="submitButton" class="form-submit-button" type="submit">
                        Submit
                    </button>
                    {/* <input id="submitButton" class="form-submit-button" type="submit" value="Submit" /> */}
                </form>
            </div>
        );
    }
}
