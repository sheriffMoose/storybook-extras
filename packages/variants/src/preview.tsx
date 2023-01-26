import { PARAM_KEY } from './constants';
import { withVariants } from './withVariants';

export const decorators = [withVariants()];

export const parameters = {
    [PARAM_KEY]: {
        enable: false,
    },
    toolbars: [
        {
            key: 'variants',
            title: 'Variants',
            // icon: 'user',
            emoji: '👿',
        },
    ],
};

export const globals = {
    [PARAM_KEY]: null,
};
