import { APP_INITIALIZER } from '@angular/core';

export const ngModuleDecorator = metadata => (storyFn, context) => {
    const story = storyFn(context);
    const deps = [].concat(
        metadata.providers || [],
        context.parameters.providers || [],
        story?.moduleMetadata?.providers || []
    );

    if (deps.length) {
        story.moduleMetadata.providers.push({
            provide: APP_INITIALIZER,
            multi: true,
            useFactory: (...services) => {
                return () =>
                    new Promise(resolve => {
                        const providers = services.reduce((obj, item) => {
                            if (item.constructor) {
                                return { ...obj, [item.constructor.name]: item };
                            } else {
                                return { ...obj };
                            }
                        }, {});

                        Object.assign(context.parameters, { providers });

                        resolve(true);
                    });
            },
            deps,
        });
    }

    if (!context.component) {
        story.template = '';
    }

    return story;
};
