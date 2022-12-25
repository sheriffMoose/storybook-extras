import { componentWrapperDecorator } from '@storybook/angular';
import { WRAPPERS_PARAM_KEY } from 'src/constants';
import { getValueByName } from 'src/helpers';

export const wrapperDecorator = () => (storyFn, context) => {
    const { globals, parameters } = context;
    const config = parameters[WRAPPERS_PARAM_KEY];

    const globalValue = globals[WRAPPERS_PARAM_KEY]?.value;
    const wrapper = getValueByName(globalValue, config.values, config.default);

    let prefix = '', suffix = '';
    if (wrapper) {
        prefix = `<${wrapper}>`;
        suffix = `</${wrapper}>`;
    }

    return componentWrapperDecorator(story => `${prefix}${story}${suffix}`)(storyFn, context);
};