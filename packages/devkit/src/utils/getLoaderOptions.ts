const remarkSlug = require('remark-slug');
const remarkExternalLinks = require('remark-external-links');

export const getLoaderOptions = () => ({
    skipCsf: false,
    mdxCompileOptions: {
        providerImportSource: '@storybook/addon-essentials/docs/mdx-react-shim',
        remarkPlugins: [remarkSlug, remarkExternalLinks],
    },
    jsxOptions: {},
});
