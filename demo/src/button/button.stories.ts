import { type StoryObj, type Meta, moduleMetadata } from '@storybook/angular';
import { BorderModule } from '../border/border.module';
import { HighlightModule } from '../highlight/highlight.module';
import { ButtonComponent } from './button.component';
import { ButtonService } from './button.service';

const meta: Meta<ButtonComponent> = {
    title: 'Example/Button',
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

export const WithBorderWrapper: Story = {
    args: {
        primary: true,
    },
    parameters: {
        wrappers: {
            default: 'Bordered Container',
        },
    },
};

export const WithHighlightWrapper: Story = {
    args: {
        primary: true,
    },
    parameters: {
        wrappers: {
            default: 'Highlight Container',
        },
    },
};

export const WithSourceCode: Story = {
    args: {
        label: 'Button With Source Code',
        primary: true,
    },
    parameters: {
        sourceCode: {
            disable: false,
        },
    },
};

export const WithCalculatedVariants: Story = {
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

export const WithAutoCalculatedVariants: Story = {
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

export const WithGroupedVariants: Story = {
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

export const withPredfinedVariants: Story = {
    parameters: {
        variants: {
            enable: true,
            include: [
                {
                    label: 'Button',
                    backgroundColor: 'blue',
                    size: 'large',
                },
                {
                    label: 'Bitton',
                    backgroundColor: 'blue',
                    size: 'small',
                },
            ],
        },
    },
};
