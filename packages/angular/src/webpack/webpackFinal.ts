import { Options } from '@storybook/types';
import { Configuration } from 'webpack';
import { AngularExtrasOptions } from '../utils/types';

import enableCoverage from './coverage';
import enablePolyfills from './polyfills';
import disableProgress from './progress';

export const webpackFinal = async (config: Configuration, options: Options & AngularExtrasOptions) => {
    return {
        ...config,
        ...disableProgress(config, options),
        ...enablePolyfills(config, options),
        ...enableCoverage(config, options),
    } as Configuration;
};
