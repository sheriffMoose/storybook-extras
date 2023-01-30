import { makeDecorator, useChannel } from '@storybook/addons';
import { findComponentByName, getCompodocJson } from '@storybook/angular/dist/client/docs';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/types';
import { EVENTS, SOURCE_CODE_DECORATOR, SOURCE_CODE_PARAM_KEY } from '../constants';
import { getSourceCode } from '../helpers';

const getMetadata = (metadata = {}, type?) => {
    const data = metadata[type] || Object.values(metadata).flat(Number.MAX_VALUE);
    return data
        .filter(x => typeof x === 'function')
        .map(x => x?.name)
        .filter(Boolean);
};

export const sourceCodeDecorator = makeDecorator({
    name: SOURCE_CODE_DECORATOR,
    parameterName: SOURCE_CODE_PARAM_KEY,
    skipIfNoParametersOrOptions: false,
    wrapper: (storyFn, context) => {
        const story: StoryFnAngularReturnType = storyFn(context);
        const metadata = story.moduleMetadata || {};
        const docs = getCompodocJson();

        const components = getMetadata(metadata)
            .map(item => findComponentByName(item, docs))
            .filter(Boolean);

        const sourceCode = getSourceCode(components);

        const emit = useChannel({});
        emit(EVENTS.SET_SOURCE_CODE, sourceCode);

        return story;
    },
});
