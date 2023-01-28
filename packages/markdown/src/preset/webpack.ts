import { getLoaderOptions } from '@storybook-extras/devkit';

const loader = require.resolve('@storybook-extras/markdown/loader');
const loaderOptions = getLoaderOptions();

export async function webpack(config, addonOptions) {
    const module = config.module || {};
    const rules = (module?.rules || []).filter(rule => rule.test?.toString() !== '/\\.md$/');

    const { mdInclude, mdExclude } = addonOptions;
    rules.push({
        test: /\.(md|html)$/,
        use: [{ loader, options: { ...loaderOptions, addonOptions } }],
        include: mdInclude || process.cwd(),
        exclude: [/node_modules/].concat(mdExclude || []),
    });

    return { ...config, module: { ...module, rules } };
}
