module.exports = {
  framework: '@storybook/angular',
  core: {
      builder: '@storybook/builder-webpack5',
  },
  stories: ['../app/**/*.stories.mdx', '../app/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: [{ from: '../.docs', to: '/docs' }],
  addons: ['../preset.js', '@storybook/addon-essentials'],
  docs: {
      defaultName: 'Overview',
      autodocs: true,
  }
};
