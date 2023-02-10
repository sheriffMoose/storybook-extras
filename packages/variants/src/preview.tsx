import { ToolbarsParameter } from '@storybook-extras/toolbars';
import { PARAM_KEY, VariantsParameter } from './types';
import { withVariants } from './decorators/withVariants.decorator';

export const decorators = [withVariants()];

export const parameters = {
    [PARAM_KEY]: {
        enable: false,
    } as VariantsParameter,
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
    ] as ToolbarsParameter[],
};

export const globals = {
    [PARAM_KEY]: null,
};
