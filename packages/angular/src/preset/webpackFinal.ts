import { Options } from '@storybook/types';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import { Configuration, ProgressPlugin } from 'webpack';
import { AngularExtrasOptions } from '../types';
import { join } from 'path';

const except = (plugins, toRemove) => {
    return (plugins || []).filter(p => !toRemove.some(i => p instanceof i));
};

const checkFlag = (variable, defaultValue) => {
    if (defaultValue === true) {
        return variable !== false;
    } else if (defaultValue === false) {
        return variable === true;
    } else {
        return variable;
    }
};

export const webpackFinal = async (config: Configuration, options: Options & AngularExtrasOptions) => {
    const { enableCoverage, enableNodePolyfills, enableWebpackProgress } = options;

    config.module = config.module || { rules: [] };
    config.module.rules = config.module.rules || [];
    config.plugins = config.plugins || [];

    if (!checkFlag(enableWebpackProgress, false)) {
        config.plugins = except(config.plugins, [ProgressPlugin]);
    }

    if (checkFlag(enableNodePolyfills, true)) {
        config.plugins.push(new NodePolyfillPlugin());
    }

    if (checkFlag(enableCoverage, true)) {
        config.module.rules.push({
            test: /\.(js|ts)$/,
            use: [{ loader: 'webpack-plugin-istanbul/loader', options: {} }],
            enforce: 'post',
            include: join(process.cwd(), 'src'),
            exclude: [/\.(e2e|spec|stories)\.ts$/, /node_modules/, /(ngfactory|ngstyle)\.js/],
        });
    }

    return config;
};
