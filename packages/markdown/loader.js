import remarkSlug from 'remark-slug';
import remarkExternalLinks from 'remark-external-links';

export const loader = require.resolve('@storybook/mdx2-csf/loader');
export const loaderOptions = {
    skipCsf: true,
    mdxCompileOptions: {
        providerImportSource: '@storybook/addon-docs/mdx-react-shim',
        remarkPlugins: [remarkSlug, remarkExternalLinks],
    },
    jsxOptions: {},
};