import _ from 'lodash-es';

export const concatDeep = (item, parentChar, childChar) => {
    if (_.isString(item)) {
        return `${item}${childChar}`;
    } else if (_.isArray(item)) {
        return (
            _.map(item, subItem => {
                return concatDeep(subItem, parentChar, childChar);
            }).join('') + parentChar
        );
    }
};
