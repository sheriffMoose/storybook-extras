import { AngularConfig } from '@storybook-extras/angular';
import { ConsoleConfig } from '@storybook-extras/console';
import { MarkdownConfig } from '@storybook-extras/markdown';
import { SwaggerConfig } from '@storybook-extras/swagger';
import { ToolbarsConfig } from '@storybook-extras/toolbars';
import { VariantsConfig } from '@storybook-extras/variants';

export type ExtrasConfig = {
    extras?: {
        angular?: boolean | AngularConfig;
        console?: boolean | ConsoleConfig;
        markdown?: boolean | MarkdownConfig;
        swagger?: boolean | SwaggerConfig;
        toolbars?: boolean | ToolbarsConfig;
        variants?: boolean | VariantsConfig;
    };
};
