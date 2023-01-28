import _ from "lodash-es";

export const groupByDeep = (collection, keys) => {
  return _.chain(collection)
    .map((item) => _.map(keys, (key) => _.get(item, key)))
    .reduce((result, paths, idx) => {
      const items = _.get(result, paths.join("."), []);
      _.set(result, paths.join("."), [...items, collection[idx]]);
      return result;
    }, {})
    .value();
};

export const mapDeep = (collection, iteratee) => {
  return _.chain(collection)
    .values()
    .map((item) => {
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

export const concatDeep = (item, parentChar, childChar) => {
  if (_.isString(item)) {
    return `${item}${childChar}`;
  } else if (_.isArray(item)) {
    return (
      _.map(item, (subItem) => {
        return concatDeep(subItem, parentChar, childChar);
      }).join("") + parentChar
    );
  }
};
