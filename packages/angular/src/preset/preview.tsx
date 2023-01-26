import {  DOCS_PARAM_KEY, WRAPPERS_PARAM_KEY } from "../constants";
import {  docsDecorator, ngModuleDecorator, sourceDecorator, wrapperDecorator } from "../decorators";

export const decorators = [
  docsDecorator(),
  ngModuleDecorator({}),
  wrapperDecorator(),
  sourceDecorator()
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
};

export const globals = {
  [DOCS_PARAM_KEY]: null as any,
  [WRAPPERS_PARAM_KEY]: null as any,
}