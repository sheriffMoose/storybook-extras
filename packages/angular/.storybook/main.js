module.exports = {
  framework: '@storybook/angular',
  stories: [
    '../*.md',
    '../app/**/*.stories.mdx',
    '../app/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  staticDirs: [
    {
      from: '../.docs',
      to: '/docs'
    }
  ],
  addons: [
    {
      name: '../preset.js',
      options: {
        disableMarkdown: false,
        openapiURL: 'https://petstore3.swagger.io/api/v3/openapi.json'
      }
    },
    '@storybook/addon-essentials',
  ],
  docs: {
    defaultName: 'Overview',
    autodocs: true,
  }
};
