
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: true,
    lazyLoad: true,
    url: 'docs/documentation.json'
  },
  console: {
    disable: false,
    patterns: [/^dev$/],
    omitFirst: true,
  },
  sourceCode: {
    disable: false,
  },
  wrappers: {
    disable: false,
    default: 'None',
    values: [
      { name: 'None', value: '' },
      { name: 'Boredered Container', value: 'app-border' },
      { name: 'Highlight Container', value: 'app-highlight' },
    ]
  },
  options: {
    storySort: {
      order: [
        'Introduction', 'README',
        'Changelog','CHANGELOG',
        'Contributing Guide','CONTRIBUTING',
        'Code of Conduct', 'CODE_OF_CONDUCT',
      ],
    },
  },
};
