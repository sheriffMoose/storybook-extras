import { checkBoolean } from '@storybook-extras/devkit';
import { resolve } from 'path';
import { Configuration } from 'webpack';
import { AngularConfig } from '../types';

export default(config: Configuration, options: AngularConfig) => {
    if (checkBoolean(options.enableCoverage, true)) {
        config.module = config.module || { rules: [] };
        config.module.rules = config.module.rules || [];
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
