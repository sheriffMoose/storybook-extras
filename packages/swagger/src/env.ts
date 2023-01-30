import { upperSnakeCase } from '@storybook-extras/devkit';

export const env = (env, options) => {
    const keys = ['openapiURL'];

    return keys.reduce(
        (obj, key) => {
            // get value from addon options
            const value = options[key] || false;

            return { ...obj, [upperSnakeCase(key)]: value };
        },
        { ...env },
    );
};
