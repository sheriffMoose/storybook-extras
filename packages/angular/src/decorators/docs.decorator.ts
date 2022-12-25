import { setCompodocJson } from "@storybook/addon-docs/angular";
import { DOCS_PARAM_KEY } from "../constants";
import fetch from 'node-fetch';

export const docsDecorator = () => (storyFn, context) => {
    const { parameters } = context;
    const config = parameters[DOCS_PARAM_KEY];

    if (config?.lazyLoad && config?.url) {
        fetch(config.url)
            .then((docs) => docs.json())
            .then((docs) => setCompodocJson(docs));
    }

    return storyFn(context);
}
