import path from 'path';

export const addons = options => {
    const main = require(path.resolve(options.configDir, 'main'));
    const framework = main.framework;
    const extras = main.extras;

    const addons = [];
    const keys = ['console', 'markdown', 'swagger'];

    if ((framework?.name || framework) === 'angular') {
        keys.push('angular');
    }

    keys.forEach(key => {
        if(extras?.[key] !== false) {
            addons.push({ name: `@storybook-extras/${key}`, options: extras[key] || {} });
        }
    });

    return addons;
};
