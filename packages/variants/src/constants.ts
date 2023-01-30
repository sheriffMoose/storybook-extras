export const ADDON_ID = '@storybook-extras/variants';
export const PARAM_KEY = 'variants';
export const DECORATOR_NAME = `${PARAM_KEY}Decorator`;


export interface VariantsConfig {
    enable?: boolean;
    items?: any[];
    include?: any[];
    exclude?: any[];
    groupBy?: string[];
    autoCalculate?: boolean;
    groupSeparator?: string;
    variantSeparator?: string;
}