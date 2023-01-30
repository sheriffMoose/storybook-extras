import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonService } from './button.service';

@Component({
    selector: 'storybook-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    providers: [ButtonService],
})
export class ButtonComponent implements OnInit {
    /**
     * Is this the principal call to action on the page?
     */
    @Input()
    primary = false;

    /**
     * What background color to use
     */
    @Input()
    backgroundColor: 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'none' = 'none';

    /**
     * How large should the button be?
     */
    @Input()
    size: 'small' | 'medium' | 'large' = 'medium';

    /**
     * Button contents
     *
     * @required
     */
    @Input()
    label = 'Button';

    /**
     * Optional click handler
     */
    @Output()
    onClick = new EventEmitter<Event>();

    constructor(private service: ButtonService) {}

    public get classes(): string[] {
        const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

        return ['storybook-button', `storybook-button--${this.size}`, mode];
    }

    ngOnInit() {
        console.log('dev', 'this message will show only in the Actions panel');
        console.log('test', 'this message will show only in the Developer Tools Console');
    }
}
