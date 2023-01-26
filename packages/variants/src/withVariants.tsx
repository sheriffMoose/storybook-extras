import { makeDecorator } from '@storybook/addons';
import { DECORATOR_NAME, PARAM_KEY, VariantsConfig } from './constants';
import { getVariants, getVariantsTemplate } from './utils';

const isEnabled = context => {
    const { globals, parameters } = context;
    const config: VariantsConfig = parameters[PARAM_KEY];
    const isGlobalEnabled = globals[PARAM_KEY] === true;
    const isParameterEnabled = config?.enable === true;
    const autoCalculate = config?.autoCalculate === true;
    const include = config?.include || [];

    return isParameterEnabled && (include.length || autoCalculate || isGlobalEnabled);
};

export const withVariants = makeDecorator({
    name: DECORATOR_NAME,
    parameterName: PARAM_KEY,
    skipIfNoParametersOrOptions: false,
    wrapper: (storyFn, context) => {
        const story: any = storyFn(context);

        const variants = getVariants(storyFn, context);
        if (variants.length === 0 || !isEnabled(context)) {
            return story;
        }

        const template = getVariantsTemplate(variants);

        return { ...story, template };
    },
});
