export declare class MyName {
    /**
     * Sets whether the form is a Step Form
     */
    stepForm: boolean;
    /**
     * 2. Reference to host HTML element.
     * Inlined decorator
     */
    el: HTMLElement;
    value: string;
    formData: Record<string, string>;
    handleSubmit(e: any): void;
    handleChange(event: any): void;
    render(): any;
}
