import { setCompodocJson } from '@storybook/addon-docs/angular';
import { makeDecorator } from '@storybook/addons';
import { global } from '@storybook/global';
import { COMPODOC_SOURCE_ID, DOCS_DECORATOR, DOCS_PARAM_KEY } from '../utils/constants';
import { DocsParameter } from '../types';

export const docsDecorator = makeDecorator({
    name: DOCS_DECORATOR,
    parameterName: DOCS_PARAM_KEY,
    skipIfNoParametersOrOptions: false,
    wrapper: (storyFn, context) => {
        const config: DocsParameter = context.parameters[DOCS_PARAM_KEY];

        const setDocs = docs => {
            setCompodocJson(docs);
        };

        const fetchDocs = url =>
            fetch(config.fetch)
                .then(docs => docs.json())
                .then(docs => setDocs(docs));

        if (config?.fetch) {
            global[COMPODOC_SOURCE_ID] = `parameters.docs.fetch`;
            fetchDocs(config.fetch);
        } else if (config?.compodoc) {
            global[COMPODOC_SOURCE_ID] = `parameters.docs.compodoc`;
            setDocs(config.compodoc);
        }

        return storyFn(context);
    },
});
