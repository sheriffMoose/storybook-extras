import { Configuration, RuleSetRule } from 'webpack';
import { getLoaderOptions } from '@storybook-extras/devkit/markdown';
import { SwaggerConfig, storyFileName } from './types';

const loader = require.resolve('./loader');
const loaderOptions = getLoaderOptions();

export const webpackFinal = async (config: Configuration, addonOptions: SwaggerConfig) => {
    config.module = config.module || { rules: [] };
    config.module.rules = (config.module?.rules || []).filter((rule: RuleSetRule) => rule?.test?.toString() !== '/\\.md$/');
   
    config.module.rules.push({
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
    });

    config.module.rules.push({
        test: new RegExp(storyFileName),
        use: [{ loader, options: { ...loaderOptions, addonOptions } }],
    });

    return config;
};
