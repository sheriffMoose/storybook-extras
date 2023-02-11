const manager = require.resolve('./dist/manager');
const preview = require.resolve('./dist/preview');
const { webpackFinal } = require('./dist/esm');

const managerEntries = (entries = []) => [...entries, manager];
const previewAnnotations = (entries = []) => [...entries, preview];

module.exports = {
    managerEntries,
    previewAnnotations,
    webpackFinal,
};
