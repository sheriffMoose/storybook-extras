import { LegacyStoryFn, StoryContext } from '@storybook/types';
import { PARAM_KEY, VariantsConfig } from './constants';
import { concatDeep, groupByDeep, mapDeep, filterDeep } from '@storybook-extras/devkit/array';
import cartesian from 'cartesian';

export class Variants {
    config: VariantsConfig;
    private _variants: any = [];

    constructor(private storyFn: LegacyStoryFn | any, private context: StoryContext | any) {
        this._init();
    }

    private _init() {
        this.config = this.context?.parameters?.[PARAM_KEY];

        const combinations = this._getCombinations();
        this._variants = combinations.map(combination => {
            const variantContext = this._getVariantContext(combination);
            const story = this.storyFn(variantContext);
            return this._populateStoryTemplate(story);
        });
    }

    isEnabled() {
        const { globals } = this.context;
        const isGlobalEnabled = globals[PARAM_KEY] === true;
        const isParameterEnabled = this.config?.enable === true;
        const autoCalculate = this.config?.autoCalculate === true;
        const isPredefined = (this.config?.items || []).length;
        const isEmpty = this._variants.length === 0;

        if (isPredefined) {
            return true;
        } else if (!isEmpty) {
            return isParameterEnabled && (autoCalculate || isGlobalEnabled);
        } else {
            return false;
        }
    }

    getTemplate() {
        const { groupBy, groupSeparator, variantSeparator } = this.config;

        const groupByKeys = (groupBy || []).map(x => `props.${x}`);
        const groupSeperator = groupSeparator || '<br><br>\n';
        const variantSeperator = variantSeparator || '&nbsp;\n';

        const groups = groupByDeep(this._variants, groupByKeys);
        const templates = mapDeep(groups, 'template');
        const concatenated = concatDeep(templates, groupSeperator, variantSeperator);

        return concatenated;
    }

    private _getVariantContext(combination): any {
        const args = { ...this.context.args, ...combination };
        const variantContext = { ...this.context, args };
        return variantContext;
    }

    private _populateStoryTemplate(story) {
        Object.keys(story.props).forEach(key => {
            if (story.template) {
                const value = story.props[key];
                let replacedValue = story.props[key];
                if (typeof value === 'string') {
                    replacedValue = `'${story.props[key]}'`;
                } else if (typeof value === 'object') {
                    replacedValue = JSON.stringify(story.props[key]).replace(/"/g, "'");
                }
                story.template = story.template.replace(`"${key}"`, `"${replacedValue}"`);
            }
        });
        return story;
    }

    private _getFilters() {
        const items = this.config.items || [];
        const includes = this.config?.include || [];
        const excludes = this.config?.exclude || [];

        let includeKeys = includes.filter(item => typeof item === 'string');
        if (!includeKeys.length) {
            includeKeys = Object.keys(this.context.argTypes);
        }

        const excludeKeys = excludes.filter(item => typeof item === 'string');

        const includeValues = includes.filter(item => typeof item === 'object');
        const excludeValues = excludes.filter(item => typeof item === 'object');

        return { items, includeKeys, excludeKeys, includeValues, excludeValues };
    }

    // Credit to @yannbf & @itaditya for this amazing code snippet
    // https://github.com/itaditya/storybook-addon-variants
    private _getCombinations(): any[] {
        const filter = this._getFilters();

        const argsMap = {};
        const sortedArgTypes = [...Object.entries(this.context.argTypes)].sort(([firstName], [secondName]) => {
            return firstName.localeCompare(secondName);
        });

        sortedArgTypes.forEach(([argName, argData]) => {
            // @ts-expect-error
            const { name: typeName, value } = argData?.type || argData;

            const isVariant = ['enum', 'boolean'].includes(typeName);
            const isIncluded = filter.includeKeys.includes(argName);
            const isExcluded = filter.excludeKeys.includes(argName);

            if (!isVariant || isExcluded || !isIncluded) {
                return;
            }

            const values = typeName === 'boolean' ? [true, false] : value;
            argsMap[argName] = values;
        });

        const combinations = cartesian(argsMap);

        const onlyIncluded = filterDeep(combinations, filter.includeValues, false);
        const withoutExcluded = filterDeep(onlyIncluded, filter.excludeValues, true);
        return filter.items.concat(withoutExcluded);
    }
}
