import _ from 'lodash-es';

export const upperSnakeCase = (str: string): string => {
    return _.chain(str).snakeCase().toUpper().value();
};
