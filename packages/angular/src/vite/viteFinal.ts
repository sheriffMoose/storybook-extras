import { AngularConfig } from '../types';
import { mergeConfig, UserConfig } from 'vite';

import enableCoverage from './coverage';
import transformRequires from './requires';
import processResources from './resources';

export const viteFinal = async (config: UserConfig, options: AngularConfig) => {
    return mergeConfig(config, {
        json: {
            namedExports: true,
            stringify: false,
        },
        resolve: {
            alias: [
                {
                    find: /^@storybook\/angular$/,
                    replacement: '@storybook/angular/dist/index.js',
                },
            ],
        },
        plugins: [
            //
            enableCoverage(options),
            processResources(),
            transformRequires({}),
        ],
        optimizeDeps: {
            force: false,
        },
        build: {
            commonjsOptions: {
                transformMixedEsModules: true,
            },
        },
    } as UserConfig);
};
