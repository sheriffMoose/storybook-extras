import './utils/polyfills';

import { DOCS_PARAM_KEY, WRAPPERS_PARAM_KEY } from './utils/constants';
import { docsDecorator, ngModuleDecorator, sourceCodeDecorator, wrapperDecorator } from './decorators';

export const decorators = [
    //
    docsDecorator(),
    ngModuleDecorator({}),
    wrapperDecorator(),
    sourceCodeDecorator(),
];

export const parameters = {
    [WRAPPERS_PARAM_KEY]: {
        enabled: true,
        default: 'None',
        values: [
            {
                name: 'None',
                value: '',
            },
        ],
    },
    [DOCS_PARAM_KEY]: {
        fetch: null,
        require: null,
    },
};

export const globals = {
    [DOCS_PARAM_KEY]: null as any,
    [WRAPPERS_PARAM_KEY]: null as any,
};
