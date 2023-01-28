import { chain, get, map, set } from 'lodash-es';

export const groupByDeep = (collection, keys) => {
    return chain(collection)
        .map(item => map(keys, key => get(item, key)))
        .reduce((result, paths, idx) => {
            const items = get(result, paths.join('.'), []);
            set(result, paths.join('.'), [...items, collection[idx]]);
            return result;
        }, {})
        .value();
};
