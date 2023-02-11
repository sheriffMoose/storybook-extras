import { StorybookConfig } from '@storybook/angular';
import { ExtrasConfig } from '@storybook-extras/preset';

const config: StorybookConfig & ExtrasConfig = {
    framework: '@storybook/angular',
    stories: [
        //
        '../stories/**/*.@(md|html)',
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    staticDirs: [
        {
            from: '../.docs',
            to: '/docs',
        },
    ],
    addons: [
        //
        '@storybook-extras/preset',
        '@storybook/addon-essentials',
    ],
    docs: {
        autodocs: true,
        defaultName: 'Overview',
    },
    extras: {
        angular: {
            enableVite: true,
            enableCoverage: true,
        },
        swagger: {
            stories: [
                {
                    title: 'Backend APIs/Petstore V2',
                    url: 'https://petstore.swagger.io/v2/swagger.json',
                },
            ],
        },
        markdown: {
            excludes: [/\.component\.html$/, /iframe\.html$/],
            stories: [
                {
                    path: '../stories/markdown-main-js.md',
                    title: 'Markdown/main.js',
                },
            ],
        },
    },
};

export default config;
