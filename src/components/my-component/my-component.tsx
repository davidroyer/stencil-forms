import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
    tag: 'my-component',
    styleUrl: 'my-component.css',
    shadow: true,
})
export class MyComponent {
    /**
     * The first name
     */
    @Prop() first: string;

    /**
     * The middle name
     */
    @Prop() middle: string;

    /**
     * The last name
     */
    @Prop() last: string;

    /**
     * The nickname
     */

    @Prop() nickname: string;

    private getText(): string {
        return format(this.first, this.middle, this.last);
    }

    render() {
        return (
            <div>
                <h2>First component test {this.getText()}</h2>
                <h3>Nickname: {this.nickname}</h3>
            </div>
        );
    }
}
