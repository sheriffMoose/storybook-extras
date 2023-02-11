import path from 'path';
import { checkBoolean } from '@storybook-extras/devkit';
import { StorybookConfig } from '@storybook/angular';
import { Options } from '@storybook/types';
import { AngularConfig } from './types';

export const core = async (config, options: Options & AngularConfig) => {
    const framework = await options.presets.apply<StorybookConfig['framework']>('framework');

    let builderName = '@storybook/builder-webpack5';
    if (checkBoolean(options.enableVite, false)) {
        builderName = '@storybook/builder-vite';
    }

    const builderPath = path.dirname(require.resolve(path.join(builderName, 'package.json')));

    return {
        ...config,
        builder: {
            name: builderPath as '@storybook/builder-webpack5',
            options: typeof framework === 'string' ? {} : framework.options.builder || {},
        },
    };
};
