import { defaultExclude, defaultExtensions } from '@storybook/addon-coverage/dist/esm/constants';
import { AngularConfig } from '../types';
import { checkBoolean } from '@storybook-extras/devkit';
import istanbul from 'vite-plugin-istanbul';

export default (options: AngularConfig) => {
    if (checkBoolean(options.enableCoverage, true)) {
        return istanbul({
            exclude: defaultExclude,
            extension: defaultExtensions,
        });
    }
    return {
        name: 'disable-coverage',
    };
};
