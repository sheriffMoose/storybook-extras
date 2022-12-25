import { action } from '@storybook/addon-actions';
import { CONSOLE_PARAM_KEY } from '../constants';

export const consoleDecorator = () => (storyFn, context) => {
    const { parameters } = context;
    const config = parameters[CONSOLE_PARAM_KEY];

    if (config.disable !== true) {
        const console = global.console || window.console;

        ['debug', 'log', 'info', 'warn', 'error'].forEach(name => {
            const method = console[name];
            console[name] = (...args) => {
                const [app, title, subTitle, msg, ...data] = args;

                if (config.filter === app) {
                    action(`[${name}] [${title}] [${subTitle}]`)({ msg, data });
                } else {
                    method(...args);
                }
            };
        });

        window.onerror = (...args) => {
            console.error(...args);
        };
    }

    return storyFn(context);
}
