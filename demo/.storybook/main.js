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
        {
            name: '@storybook-extras/preset',
            options: {
                swagger: {
                    openapiURL: 'https://petstore.swagger.io/v2/swagger.json',
                },
                markdown: {
                    mdExclude: [/\.component\.html$/],
                },
            },
        },
        '@storybook/addon-essentials',
    ],
    docs: {
        defaultName: 'Overview',
        autodocs: true,
    },
};
