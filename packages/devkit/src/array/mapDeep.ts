import { chain, isArray, isObject, map } from 'lodash-es';

export const mapDeep = (collection, iteratee) => {
    return chain(collection)
        .values()
        .map(item => {
            if (isArray(item)) {
                return map(item, iteratee);
            }
            if (isObject(item)) {
                return mapDeep(item, iteratee);
            }
            return null;
        })
        .value();
};
