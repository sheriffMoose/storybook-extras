import { Configuration } from 'webpack';
import { AngularConfig } from '../types';

import enableCoverage from './coverage';
import enablePolyfills from './polyfills';
import disableProgress from './progress';

export const webpackFinal = async (config: Configuration, options: AngularConfig) => {
    return {
        ...config,
        ...disableProgress(config, options),
        ...enablePolyfills(config, options),
        ...enableCoverage(config, options),
    } as Configuration;
};
