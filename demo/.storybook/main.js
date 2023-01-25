module.exports = {
    framework: '@storybook/angular',
    stories: [
        //
        '../*.md',
        '../app/**/*.stories.mdx',
        '../app/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    staticDirs: [
        {
            from: '../.docs',
            to: '/docs',
        },
    ],
    addons: [
        //
        '@storybook-extras/angular',
        '@storybook-extras/console',
        {
            name: '@storybook-extras/markdown',
            options: {
                mdExclude: [/\.component\.html$/],
            },
        },
        {
            name: '@storybook-extras/swagger',
            options: {
                openapiURL: 'https://petstore.swagger.io/v2/swagger.json',
            },
        },
        '@storybook/addon-essentials',
    ],
    docs: {
        defaultName: 'Overview',
        autodocs: true,
    },
};
