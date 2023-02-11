import { Configuration, RuleSetRule } from 'webpack';
import { Options } from '@storybook/types';
import { getLoaderOptions } from '@storybook-extras/devkit/markdown';
import { MarkdownConfig } from './types';

const loader = require.resolve('@storybook-extras/markdown/loader');
const loaderOptions = getLoaderOptions();

export const webpackFinal = async (config: Configuration, options: Options & MarkdownConfig) => {
    const module = config.module || {};
    const rules = (module?.rules || []).filter((rule: RuleSetRule) => rule.test.toString() !== '/\\.md$/');

    const { include, exclude } = options;
    config.module.rules = [
        ...rules,
        {
            test: /\.(md|html)$/,
            use: [{ loader, options: { ...loaderOptions, options } }],
            include: include || process.cwd(),
            exclude: [/node_modules/].concat(exclude || []),
        },
    ];


    return config;
};
