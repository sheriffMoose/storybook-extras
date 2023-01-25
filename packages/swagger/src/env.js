import _ from 'lodash';

export const env = (env, options) => {
    const keys = ['openapiURL'];

    return keys.reduce(
        (obj, key) => {
            // get value from addon options
            const value = options[key] || false;
            // transform key into UPPER_SNAKE_CASE
            key = _.chain(key).snakeCase().toUpper().value();

            return { ...obj, [key]: value };
        },
        { ...env },
    );
};
