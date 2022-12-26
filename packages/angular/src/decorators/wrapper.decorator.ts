import { componentWrapperDecorator } from '@storybook/angular';
import { WRAPPERS_PARAM_KEY } from 'src/constants';
import { getItemByName } from 'src/helpers';

export const wrapperDecorator = () => (storyFn, context) => {
    const { globals, parameters } = context;
    const config = parameters[WRAPPERS_PARAM_KEY];

    const globalValue = globals[WRAPPERS_PARAM_KEY]?.value;
    const wrapper = getItemByName(globalValue, config.values, config.default);

    let prefix = '', suffix = '', options = '';
    if (wrapper.value) {
        options = wrapper.options || {};
        const attrs = Object.keys(options).reduce((attrs, key) => {
            return attrs += ` ${key}="${options[key]}"`;
        }, '');
        prefix = `<${wrapper.value}${attrs}>`;
        suffix = `</${wrapper.value}>`;
    }

    return componentWrapperDecorator(story => `${prefix}${story}${suffix}`)(storyFn, context);
};