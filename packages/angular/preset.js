
const preview = require.resolve("./dist/esm/preset/preview");
const manager = require.resolve("./dist/esm/preset/manager");

const presetWebpack = require('./preset.webpack');


module.exports = {
  managerEntries: (entry = []) => [...entry, manager],
  previewAnnotations: (entry = []) => [...entry, preview],
  ...presetWebpack
};
