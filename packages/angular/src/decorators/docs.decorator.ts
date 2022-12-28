import { setCompodocJson } from "@storybook/addon-docs/angular";
import { addons, makeDecorator } from '@storybook/addons';
import fetch from 'node-fetch';
import { DOCS_PARAM_KEY, EVENTS } from "../constants";

export const docsDecorator = makeDecorator({
    name: 'docsDecorator',
    parameterName: 'docsDecorator',
    skipIfNoParametersOrOptions: false,
    wrapper: (storyFn, context) => {
        const { parameters } = context;
        const config = parameters[DOCS_PARAM_KEY];
        const channel = addons.getChannel();

        const setDocs = (docs) => {
            setCompodocJson(docs);
            channel.emit(EVENTS.SET_DOCS, docs);
        }

        if (config?.data) {
            setDocs(config.data);
        } else if (config?.url && config?.lazyLoad) {
            fetch(config.url)
                .then((docs) => docs.json())
                .then((docs) => setDocs(docs));
        }

        return storyFn(context);
    }
});
