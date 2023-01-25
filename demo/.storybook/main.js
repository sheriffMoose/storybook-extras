module.exports = {
    framework: '@storybook/angular',
    stories: ['../*.md', '../app/**/*.stories.mdx', '../app/**/*.stories.@(js|jsx|ts|tsx)'],
    staticDirs: [
        {
            from: '../.docs',
            to: '/docs',
        },
    ],
    addons: [
        '@storybook-extras/console',
        '@storybook/addon-essentials',
    ],
    docs: {
        defaultName: 'Overview',
        autodocs: true,
    },
};
