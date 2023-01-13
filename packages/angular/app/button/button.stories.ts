import { type StoryObj, type Meta, moduleMetadata } from '@storybook/angular';
import { BorderModule } from '../border/border.module';
import { HighlightModule } from '../highlight/highlight.module';
import Button from './button.component';
import { ButtonService } from './button.service';

const meta: Meta<Button> = {
    title: 'Example/Button',
    component: Button,
    tags: ['docsPage'],
    decorators: [
        moduleMetadata({
            imports: [BorderModule, HighlightModule],
            declarations: [Button],
            providers: [ButtonService],
        }),
    ],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    parameters: {
        isInDocs: true,
    },
};

export default meta;
type Story = StoryObj<Button>;

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
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        label: 'Button',
    },
};
