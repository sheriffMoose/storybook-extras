const { addons, env, stories, webpackFinal } = require('./main');

const preview = require.resolve("./dist/esm/preset/preview");
const manager = require.resolve("./dist/esm/preset/manager");

const managerEntries = (entry = []) => [...entry, manager];
const previewAnnotations = (entry = []) => [...entry, preview];

module.exports = {
  stories,
  addons,
  env,
  managerEntries,
  previewAnnotations,
  webpackFinal,
};
