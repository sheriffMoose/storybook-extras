import { LegacyStoryFn, StoryContext } from '@storybook/types';
import { PARAM_KEY, VariantsConfig } from './constants';
import { concatDeep, groupByDeep, mapDeep } from '@storybook-extras/devkit/array';

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
        const isPredefined = (this.config?.include || []).length;
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

        const groupedVariants = groupByDeep(this._variants, groupByKeys);
        const mappedVariants = mapDeep(groupedVariants, 'template');
        const concatenatedVariants = concatDeep(mappedVariants, groupSeperator, variantSeperator);

        return concatenatedVariants;
    }

    private _getVariantContext(combination): any {
        const args = { ...this.context.args, ...combination };
        const variantContext = { ...this.context, args };
        return variantContext;
    }

    private _populateStoryTemplate(story) {
        Object.keys(story.props).forEach(key => {
            const value = story.props[key];
            let replacedValue = story.props[key];
            if (typeof value === 'string') {
                replacedValue = `'${story.props[key]}'`;
            } else if (typeof value === 'object') {
                replacedValue = JSON.stringify(story.props[key]).replace(/"/g, "'");
            }
            story.template = story.template.replace(`"${key}"`, `"${replacedValue}"`);
        });
        return story;
    }

    // Credit to @yannbf & @itaditya for this amazing code snippet
    // https://github.com/itaditya/storybook-addon-variants
    private _getCombinations(): any[] {
        if (!this.config) {
            return [];
        } else if ((this.config?.include || []).length) {
            return this.config.include;
        }

        const argsMap = {};
        const sortedArgTypes = [...Object.entries(this.context.argTypes)].sort(([firstName], [secondName]) => {
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
    }
}
