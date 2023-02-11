import { type StoryObj, type Meta, moduleMetadata } from '@storybook/angular';
import { BorderModule } from '../border/border.module';
import { HighlightModule } from '../highlight/highlight.module';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
    title: 'Button',
    component: ButtonComponent,
    decorators: [
        moduleMetadata({
            imports: [BorderModule, HighlightModule],
        }),
    ],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
    args: {
        primary: true,
        label: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        label: 'Button',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        label: 'Button',
        primary: true,
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        label: 'Button',
        primary: true,
    },
};
