import { makeDecorator, useChannel } from "@storybook/addons";
import { EVENTS } from "../constants";

export const sourceDecorator = makeDecorator({
    name: 'sourceDecorator',
    parameterName: '_sourceCode',
    skipIfNoParametersOrOptions: false,
    wrapper: (storyFn, context) => {
        const story = storyFn(context);

        const getMetadata = (type) => {
            const metadata = (story as any)?.moduleMetadata || {};
            return (metadata[type] || [])
                .filter(x => typeof (x) === 'function')
                .map(x => x?.name)
                .filter(Boolean);
        }

        const emit = useChannel({
            [EVENTS.SET_DOCS]: docs => {
                const data = {
                    docs,
                    components: getMetadata('declarations'),
                    services: getMetadata('providers'),
                };
                emit(EVENTS.SET_CONTEXT, data);
            }
        });


        const compodocs = window['__STORYBOOK_COMPODOC_JSON__'];
        if (compodocs) {
            emit(EVENTS.SET_DOCS, compodocs);
        }

        return story;
    }
});