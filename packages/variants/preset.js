const preview = require.resolve('./dist/esm/preview');

export default {
    addons: options => ['@storybook-extras/toolbars'],
    previewAnnotations: (entries = []) => [...entries, preview],
};
