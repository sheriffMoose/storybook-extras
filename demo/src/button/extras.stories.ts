import { type StoryObj, type Meta, moduleMetadata } from '@storybook/angular';
import { BorderModule } from '../border/border.module';
import { HighlightModule } from '../highlight/highlight.module';
import { ButtonComponent } from './button.component';
import { ButtonService } from './button.service';

const meta: Meta<ButtonComponent> = {
    title: 'Button/Extras',
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

export const WithDocumentation: Story = {
    parameters: {
        docs: {
            compodoc: require('../../.docs/documentation.json'),
        },
    },
};

export const WithLazyLoadedDocumentation: Story = {
    parameters: {
        docs: {
            fetch: 'docs/documentation.json',
        },
    },
};

export const WithConsoleLogs: Story = {
    play: async ({ canvasElement }) => {
        console.log('dev', 'this message will show only in the Actions panel');
        console.log('test', 'this message will show only in the Developer Tools Console');
    }
}

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