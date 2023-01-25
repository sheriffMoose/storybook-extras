import { action } from '@storybook/addon-actions';
import { makeDecorator } from '@storybook/addons';
import { DECORATOR_NAME, PARAM_KEY } from './constants';

export const consoleDecorator = makeDecorator({
  name: DECORATOR_NAME,
  parameterName: PARAM_KEY,
  skipIfNoParametersOrOptions: false,
  wrapper: (storyFn, context) => {
    const { parameters } = context;
    const config = parameters[PARAM_KEY];

    if (config.disable !== true) {
      const console = global.console || window.console;

      ['debug', 'log', 'info', 'warn', 'error'].forEach((name) => {
        const method = console[name];
        console[name] = (...args) => {
          const [argv0, ...argv] = args;

          const patterns = (config.patterns || []).map((p) => new RegExp(p));
          const isMatched = patterns.some((p) => p.test(argv0));
          if (isMatched) {
            if (config.omitFirst) {
              action(name)(...argv);
            } else {
              action(name)(...args);
            }
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
  },
});
