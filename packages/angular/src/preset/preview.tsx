import { CONSOLE_PARAM_KEY, DOCS_PARAM_KEY, WRAPPERS_PARAM_KEY } from "../constants";
import { consoleDecorator, docsDecorator, ngModuleDecorator, wrapperDecorator } from "../decorators";

export const decorators = [
  consoleDecorator(),
  docsDecorator(),
  ngModuleDecorator({}),
  wrapperDecorator(),
];

export const parameters = {
  [WRAPPERS_PARAM_KEY]: {
    enabled: true,
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
    enabled: true,
    patterns: [/^dev$/],
    omitFirst: true,
  }
};

export const globals = {
  [CONSOLE_PARAM_KEY]: null as any,
  [DOCS_PARAM_KEY]: null as any,
  [WRAPPERS_PARAM_KEY]: null as any,
}