import { filter, reject } from 'lodash-es';

export const filterDeep = (collection, predicates, negate = false) => {
    collection = collection || [];
    predicates = predicates || [];
    return predicates.reduce((acc, predicate) => {
        return negate ? reject(acc, predicate) : filter(acc, predicate);
    }, collection);
};
