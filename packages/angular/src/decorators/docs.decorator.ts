import { setCompodocJson } from '@storybook/addon-docs/angular';
import { addons, makeDecorator } from '@storybook/addons';
import { COMPODOC_ID, COMPODOC_SOURCE_ID, DOCS_PARAM_KEY, EVENTS } from '../constants';
import { DocsConfig } from '../types';
import { deprecate } from '@storybook/client-logger';
import { global } from '@storybook/global';

export const docsDecorator = makeDecorator({
    name: 'docsDecorator',
    parameterName: '_docs',
    skipIfNoParametersOrOptions: false,
    wrapper: (storyFn, context) => {
        const config: DocsConfig = context.parameters[DOCS_PARAM_KEY];
        const channel = addons.getChannel();

        const setDocs = docs => {
            setCompodocJson(docs);
            channel.emit(EVENTS.SET_DOCS, docs);
        };

        const fetchDocs = url =>
            fetch(config.fetch)
                .then(docs => docs.json())
                .then(docs => setDocs(docs));

        // Precedence order: fetch > compodoc > data > lazyLoad > main.js
        if (config?.fetch) {
            global[COMPODOC_SOURCE_ID] = `parameters.docs.fetch`;
            fetchDocs(config.fetch);
        } else if (config?.compodoc) {
            global[COMPODOC_SOURCE_ID] = `parameters.docs.compodoc`;
            setDocs(config.compodoc);
        } else if (config?.data) {
            deprecate(`docsDecorator: 'data' has been renamed to 'compodoc'`);
            global[COMPODOC_SOURCE_ID] = `parameters.docs.data`;
            setDocs(config.data);
        } else if (config?.url && config?.lazyLoad) {
            deprecate(`docsDecorator: 'url' & 'lazyLoad' are  deprecated, use 'fetch' instead`);
            global[COMPODOC_SOURCE_ID] = `parameters.docs.url`;
            fetchDocs(config.url);
        } else {
            try {
                global[COMPODOC_SOURCE_ID] = `main.docs.require`;
                const docs = require(COMPODOC_ID);
                setDocs(docs);
            } catch (e) {}
        }

        return storyFn(context);
    },
});
