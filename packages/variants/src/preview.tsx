import { PARAM_KEY } from './constants';
import { withVariants } from './withVariants.decorator';

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
            isDisabled: (globals, parameter) => {
                return parameter?.autoCalculate || parameter?.include?.length;
            },
        },
    ],
};

export const globals = {
    [PARAM_KEY]: null,
};
