const preview = require.resolve('./dist/esm/preview');

module.exports = {
    addons: options => ['@storybook-extras/toolbars'],
    previewAnnotations: (entries = []) => [...entries, preview],
};
