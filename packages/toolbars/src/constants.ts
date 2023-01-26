import { Args, Parameters } from '@storybook/types';

export const PARAM_KEY = 'toolbars';
export const ADDON_ID = '@storybook-extras/toolbars';
export const TOOL_NAME = `Custom Toolbar Buttons`;

export interface ButtonConfig {
    key: string;
    title: string;
    icon?: any;
    emoji?: string;
    isDisabled?: (globals: Args, parameters: Parameters) => boolean;
}
