const manager = require.resolve('./dist/esm/manager');
const preview = require.resolve('./dist/esm/preview');
const { webpackFinal } = require('./dist/esm');

const managerEntries = (entries = []) => [...entries, manager];
const previewAnnotations = (entries = []) => [...entries, preview];

module.exports = {
    managerEntries,
    previewAnnotations,
    webpackFinal,
};
