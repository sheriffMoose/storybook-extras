import { getLoaderOptions } from '@storybook-extras/devkit/markdown';

const loader = require.resolve('@storybook-extras/markdown/loader');
const loaderOptions = getLoaderOptions();

export async function webpack(config, addonOptions) {
    const module = config.module || {};
    const rules = (module?.rules || []).filter(rule => rule.test?.toString() !== '/\\.md$/');

    const { include, exclude } = addonOptions;
    rules.push({
        test: /\.(md|html)$/,
        use: [{ loader, options: { ...loaderOptions, addonOptions } }],
        include: include || process.cwd(),
        exclude: [/node_modules/].concat(exclude || []),
    });

    return { ...config, module: { ...module, rules } };
}
