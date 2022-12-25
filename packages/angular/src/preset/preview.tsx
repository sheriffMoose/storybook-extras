import { CONSOLE_PARAM_KEY, DOCS_PARAM_KEY, PARAM_KEY, WRAPPERS_PARAM_KEY } from "src/constants";
import { consoleDecorator, docsDecorator, wrapperDecorator } from "../decorators";

export const decorators = [
  consoleDecorator(),
  docsDecorator(),
  wrapperDecorator(),
];

export const parameters = {
  [WRAPPERS_PARAM_KEY]: {
    default: 'None',
    values: [
      { name: 'None', value: '' },
    ],
  },
  [DOCS_PARAM_KEY]: {
    lazyLoad: false,
    url: ''
  },
  [CONSOLE_PARAM_KEY]: {
    disable: false,
    filter: 'ng'

  }
};

export const globals = {
  [CONSOLE_PARAM_KEY]: null as any,
  [DOCS_PARAM_KEY]: null as any,
  [WRAPPERS_PARAM_KEY]: null as any,
}