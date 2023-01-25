import path from 'path';

export const addons = options => {
    const main = require(path.resolve(options.configDir, 'main'));
    const framework = main.framework;
    const addons = [];

    const keys = ['console', 'markdown', 'swagger'];
    if ((framework?.name || framework).includes('angular')) {
        // keys.push('angular');
    }

    keys.forEach(key => {
        if (options[key] !== false) {
            addons.push({ name: `@storybook-extras/${key}`, options: options[key] || {} });
        }
    });

    return addons;
};
