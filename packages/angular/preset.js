const manager = require.resolve('./dist/preset/manager');
const preview = require.resolve('./dist/preset/preview');
const { webpackFinal } = require('./dist/preset/webpackFinal');

const managerEntries = (entries = []) => [...entries, manager];
const previewAnnotations = (entries = []) => [...entries, preview];

module.exports = {
    managerEntries,
    previewAnnotations,
    webpackFinal,
};
