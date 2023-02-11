import { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig & { extras: any } = {
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
        swagger: {
            stories: [
                {
                    title: 'Backend APIs',
                    url: 'https://petstore.swagger.io/v2/swagger.json',
                }
            ]
        },
        markdown: {
            exclude: [/\.component\.html$/],
            titles: {
                '../stories/markdown-main-js.md': 'Markdown/main.js',
            },
        },
    },
};

export default config;
