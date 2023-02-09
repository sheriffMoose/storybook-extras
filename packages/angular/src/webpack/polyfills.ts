import { checkBoolean } from '@storybook-extras/devkit';
import { Options } from '@storybook/types';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import { Configuration } from 'webpack';
import { AngularExtrasOptions } from '../utils/types';

export default (config: Configuration, options: Options & AngularExtrasOptions) => {
    if (checkBoolean(options.enableNodePolyfills, true)) {
        config.plugins = (config.plugins || []).concat([new NodePolyfillPlugin()]);
    }
    return config;
};
