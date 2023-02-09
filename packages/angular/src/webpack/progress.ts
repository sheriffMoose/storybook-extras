import { checkBoolean, rejectByInstance } from '@storybook-extras/devkit';
import { Options } from '@storybook/types';
import { Configuration, ProgressPlugin } from 'webpack';
import { AngularExtrasOptions } from '../utils/types';

export default (config: Configuration, options: Options & AngularExtrasOptions) => {
    if (!checkBoolean(options.enableWebpackProgress, false)) {
        config.plugins = rejectByInstance(config.plugins || [], [ProgressPlugin]);
    }
    return config;
};
