const preview = require.resolve('./dist/esm/preview');

module.exports = {
    previewAnnotations: (entries = []) => [...entries, preview],
};
