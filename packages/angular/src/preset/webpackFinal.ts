import { join } from 'path';
import { Options } from '@storybook/types';
import { Configuration, ProgressPlugin } from 'webpack';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

const except = (plugins, toRemove) => {
    return (plugins || []).filter(p => !toRemove.some(i => p instanceof i));
};

export const webpackFinal = async (config: Configuration, options: Options) => {
    config.module = config.module || { rules: [] };
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
        test: /\.(js|ts)$/,
        loader: '@jsdevtools/coverage-istanbul-loader',
        enforce: 'post',
        include: join(process.cwd(), 'src'),
        exclude: [/\.(e2e|spec|stories)\.ts$/, /node_modules/, /(ngfactory|ngstyle)\.js/],
    });

    config.plugins = config.plugins || [];
    config.plugins = [...except(config.plugins, [ProgressPlugin]), new NodePolyfillPlugin()];

    return config;
};
