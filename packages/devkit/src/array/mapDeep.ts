import _ from 'lodash-es';

export const mapDeep = (collection, iteratee) => {
    return _.chain(collection)
        .values()
        .map(item => {
            if (_.isArray(item)) {
                return _.map(item, iteratee);
            }
            if (_.isObject(item)) {
                return mapDeep(item, iteratee);
            }
            return null;
        })
        .value();
};
