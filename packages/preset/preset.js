import path from 'path';

export const addons = options => {
    const main = require(path.resolve(options.configDir, 'main'));
    const framework = (main?.default || main).framework;
    const extras = (main?.default || main).extras;

    const addons = [];
    const keys = ['console', 'markdown', 'swagger', 'toolbars', 'variants'];

    if ((framework?.name || framework || '').includes('angular')) {
        keys.push('angular');
    }

    keys.forEach(key => {
        const disabled = extras?.[key] === false || extras?.[key]?.enable === false;
        if (!disabled) {
            addons.push({ name: `@storybook-extras/${key}`, options: extras?.[key] || {} });
        }
    });

    return addons;
};
