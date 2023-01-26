import _ from 'lodash-es';
import { PARAM_KEY, VariantsConfig } from './constants';

export const getVariants = (storyFn, context) => {
    const config: VariantsConfig = context?.parameters?.[PARAM_KEY];
    const groupByKeys = (config?.groupBy || []).map(x => `props.${x}`);

    let wrapper;
    try {
        const sbAngular = require('@storybook/angular');
        wrapper = sbAngular.componentWrapperDecorator(story => story);
    } catch (e) {}

    const combinations = context.parameters?.variants?.include;
    const variants = combinations || getCombinations(context.argTypes);
    return groupByDeep(
        variants.map(variant => {
            const args = { ...context.args, ...variant };
            const variantContext = { ...context, args };
            const story = wrapper(() => storyFn(variantContext), variantContext);
            Object.keys(story.props).forEach(key => {
                const value = story.props[key];
                let replacer = `\"${story.props[key]}\"`;
                if (typeof value === 'string') {
                    replacer = `\"'${story.props[key]}'\"`;
                }
                story.template = story.template.replace(`\"${key}\"`, replacer);
            });
            return story;
        }),
        groupByKeys,
    );
};

export const getVariantsTemplate = variants => {
    return concatDeep(mapDeep(variants, 'template'), '<br><br>\n', '&nbsp;\n');
};

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

// Credit to @yannbf & @itaditya for this amazing code snippet
// https://github.com/itaditya/storybook-addon-variants
export const getCombinations = argTypes => {
    const argsMap = {};

    const sortedArgTypes = [...Object.entries(argTypes)].sort(([firstName], [secondName]) => {
        return firstName.localeCompare(secondName);
    });

    sortedArgTypes.forEach(([argName, argData]) => {
        // @ts-expect-error
        const { name: typeName, value } = argData?.type || argData;
        if (!['enum', 'boolean'].includes(typeName)) {
            return;
        }

        const values = typeName === 'boolean' ? [true, false] : value;
        argsMap[argName] = values;
    });

    const combinations = require('cartesian')(argsMap);

    return combinations;
};
