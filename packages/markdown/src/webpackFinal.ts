import { Configuration, RuleSetRule } from 'webpack';
import { getLoaderOptions } from '@storybook-extras/devkit/markdown';
import { MarkdownConfig } from './types';

const loader = require.resolve('./loader');
const loaderOptions = getLoaderOptions();

export const webpackFinal = async (config: Configuration, addonOptions: MarkdownConfig) => {
    const { includes, excludes } = addonOptions;

    config.module = config.module || { rules: [] };
    config.module.rules = (config.module?.rules || []).filter((rule: RuleSetRule) => rule?.test?.toString() !== '/\\.md$/');
    config.module.rules.push({
        test: /\.(md|html)$/,
        use: [{ loader, options: { ...loaderOptions, addonOptions } }],
        include: includes || process.cwd(),
        exclude: [/node_modules/].concat(excludes || []),
    });

    return config;
};
