import { isArray, isString, map } from 'lodash-es';

export const concatDeep = (item, parentChar, childChar) => {
    if (isString(item)) {
        return `${item}${childChar}`;
    } else if (isArray(item)) {
        return (
            map(item, subItem => {
                return concatDeep(subItem, parentChar, childChar);
            }).join('') + parentChar
        );
    }
};
