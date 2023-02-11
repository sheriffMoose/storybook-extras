import { checkBoolean, rejectByInstance } from '@storybook-extras/devkit';
import { Configuration, ProgressPlugin } from 'webpack';
import { AngularConfig } from '../types';

export default (config: Configuration, options: AngularConfig) => {
    if (!checkBoolean(options.enableWebpackProgress, false)) {
        config.plugins = rejectByInstance(config.plugins || [], [ProgressPlugin]);
    }
    return config;
};
