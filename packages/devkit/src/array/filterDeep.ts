import _ from 'lodash-es';

export const filterDeep = (collection, predicates, negate = false) => {
    collection = collection || [];
    predicates = predicates || [];
    return predicates.reduce((acc, predicate) => {
        return negate ? _.reject(acc, predicate) : _.filter(acc, predicate);
    }, collection);
};
