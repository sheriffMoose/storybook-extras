import { checkBoolean } from '@storybook-extras/devkit';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import { Configuration } from 'webpack';
import { AngularConfig } from '../types';

export default (config: Configuration, options: AngularConfig) => {
    if (checkBoolean(options.enableNodePolyfills, true)) {
        config.plugins = (config.plugins || []).concat([new NodePolyfillPlugin()]);
    }
    return config;
};
