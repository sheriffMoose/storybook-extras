import { type StoryObj, type Meta, moduleMetadata } from '@storybook/angular';
import { BorderModule } from '../border/border.module';
import { HighlightModule } from '../highlight/highlight.module';
import { ButtonComponent } from './button.component';
import { ButtonService } from './button.service';

const meta: Meta<ButtonComponent> = {
    title: 'Button/Variants',
    component: ButtonComponent,
    decorators: [
        moduleMetadata({
            imports: [BorderModule, HighlightModule],
            declarations: [ButtonComponent],
            providers: [ButtonService],
        }),
    ],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const WithToolbarButton: Story = {
    args: {
        label: 'Button',
        backgroundColor: 'red',
    },
    parameters: {
        variants: {
            enable: true,
        },
    },
};

export const WithAutoCalculation: Story = {
    args: {
        label: 'Button',
        backgroundColor: 'red',
    },
    parameters: {
        variants: {
            enable: true,
            autoCalculate: true,
        },
    },
};

export const WithGroups: Story = {
    args: {
        label: 'Button',
        backgroundColor: 'red',
    },
    parameters: {
        variants: {
            enable: true,
            autoCalculate: true,
            groupBy: ['primary', 'size'],
        },
    },
};

export const withInclusions: Story = {
    args: {
        label: 'Button',
        backgroundColor: 'yellow',
    },
    parameters: {
        variants: {
            enable: true,
            autoCalculate: true,
            include: ['size', 'backgroundColor', { size: 'large' }],
        },
    },
};

export const withExclusions: Story = {
    args: {
        label: 'Button',
        backgroundColor: 'red',
    },
    parameters: {
        variants: {
            enable: true,
            autoCalculate: true,
            exclude: ['size', { backgroundColor: 'none' }, { primary: false }],
        },
    },
};

export const withPredefined: Story = {
    parameters: {
        variants: {
            enable: true,
            items: [
                {
                    size: 'large',
                    backgroundColor: 'blue',
                    label: 'Large Blue Button',
                    primary: true,
                },
            ],
            include: ['backgroundColor'],
            exclude: [{ backgroundColor: 'blue' }],
        },
    },
};
