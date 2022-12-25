
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
    disable: true,
    filter: 'sp',
  },
  wrappers: {
    disable: false,
    default: 'None',
    values: [
      { name: 'None', value: '' },
      { name: 'Container', value: 'app-container' }
    ]
  }
};
