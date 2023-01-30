import _ from 'lodash-es';

export const groupByDeep = (collection, keys) => {
    return _.chain(collection)
        .map(item => _.map(keys, key => _.get(item, key)))
        .reduce((result, paths, idx) => {
            const items = _.get(result, paths.join('.'), []);
            _.set(result, paths.join('.'), [...items, collection[idx]]);
            return result;
        }, {})
        .value();
};
