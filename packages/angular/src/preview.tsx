import './utils/polyfills';

import { DOCS_PARAM_KEY, SOURCE_CODE_PARAM_KEY, WRAPPERS_PARAM_KEY } from './utils/constants';
import { docsDecorator, ngModuleDecorator, sourceCodeDecorator, wrapperDecorator } from './decorators';
import { DocsParameter, SourceCodeParameter, WrappersParameter } from './types';

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
    } as WrappersParameter,

    [DOCS_PARAM_KEY]: {
        fetch: null,
        compodoc: null,
    } as DocsParameter,

    [SOURCE_CODE_PARAM_KEY]: {
        disable: true,
    } as SourceCodeParameter,
};

export const globals = {
    [DOCS_PARAM_KEY]: null as any,
    [WRAPPERS_PARAM_KEY]: null as any,
};
