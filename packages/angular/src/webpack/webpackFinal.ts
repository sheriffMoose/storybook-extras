import { checkBoolean, rejectByInstance } from '@storybook-extras/devkit';
import { Options } from '@storybook/types';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import { isAbsolute, resolve } from 'path';
import { Configuration, ProgressPlugin } from 'webpack';
import { COMPODOC_ID } from '../utils/constants';
import { AngularExtrasOptions } from '../utils/types';

export const webpackFinal = async (config: Configuration, options: Options & AngularExtrasOptions) => {
    const { enableCoverage, enableNodePolyfills, enableWebpackProgress } = options;

    config.resolve = config.resolve || { alias: {} };
    config.resolve.alias = config.resolve.alias || {};
    config.module = config.module || { rules: [] };
    config.module.rules = config.module.rules || [];
    config.plugins = config.plugins || [];

    const main = require(`${options.configDir}/main`);
    let compodoc = main?.docs?.compodoc;
    if (compodoc) {
        compodoc = isAbsolute(compodoc) ? compodoc : resolve(options.configDir, compodoc);
        config.resolve.alias[COMPODOC_ID] = compodoc;
    }

    if (!checkBoolean(enableWebpackProgress, false)) {
        config.plugins = rejectByInstance(config.plugins, [ProgressPlugin]);
    }

    if (checkBoolean(enableNodePolyfills, true)) {
        config.plugins.push(new NodePolyfillPlugin());
    }

    if (checkBoolean(enableCoverage, true)) {
        config.module.rules.push({
            test: /\.(js|ts)$/,
            use: [{ loader: 'webpack-plugin-istanbul/loader', options: {} }],
            enforce: 'post',
            include: resolve(process.cwd(), 'src'),
            exclude: [/\.(e2e|spec|stories)\.ts$/, /node_modules/, /(ngfactory|ngstyle)\.js/],
        });
    }

    return config;
};
