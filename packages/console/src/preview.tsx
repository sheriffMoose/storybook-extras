import { ConsoleParameter, PARAM_KEY } from './types';
import { consoleDecorator } from './decorators/console.decorator';

export const decorators = [consoleDecorator()];

export const parameters = {
  [PARAM_KEY]: {
    disable: false,
    patterns: [/^dev$/],
    omitFirst: true,
  } as ConsoleParameter,
};

export const globals = {
  [PARAM_KEY]: null,
};
