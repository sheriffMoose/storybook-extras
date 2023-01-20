
const preview = require.resolve("./dist/esm/preset/preview");
const manager = require.resolve("./dist/esm/preset/manager");


const presetWebpack = require('./preset.webpack');


module.exports = {
  addons: (options) => {
    if (options.disableMarkdown) {
      return [];
    }

    return [
      {
        name: '@sheriffmoose/storybook-md',
        options: {
          mdExclude: [/\.component\.html$/]
        }
      }
    ]
  },
  managerEntries: (entry = []) => [...entry, manager],
  previewAnnotations: (entry = []) => [...entry, preview],
  ...presetWebpack,
};
