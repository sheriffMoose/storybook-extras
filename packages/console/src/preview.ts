import { PARAM_KEY } from './constants';
import { consoleDecorator } from './console.decorator';

export const decorators = [consoleDecorator()];

export const parameters = {
  [PARAM_KEY]: {
    disable: false,
    patterns: [/^dev$/],
    omitFirst: true,
  },
};

export const globals = {
  [PARAM_KEY]: null,
};
