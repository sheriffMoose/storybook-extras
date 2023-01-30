import { Options } from '@storybook/types';

export interface Wrapper {
    name: string;
    value: string;
}

export interface SelectorItem {
    id: string;
    title: string;
    onClick: () => void;
    value: string;
    active: boolean;
}

// CONFIG TYPES

export interface DocsConfig {
    /**
     * @deprecated `url` is deprecated, use `fetch` instead
     */
    url?: string;
    /**
     * @deprecated `lazyLoad` is deprecated, it is now enabled by default if you use `fetch`
     */
    lazyLoad?: boolean;
    /**
     * @deprecated `data` is deprecated, use `compodoc` instead
     */
    data?: any;

    compodoc?: any;
    fetch?: string;
}

export interface SourceCodeConfig {
    disable?: boolean;
}

export interface WrappersConfig {
    disable?: boolean;
    default?: string;
    values: Wrapper[];
}

export type AngularExtrasOptions = Options & {
    enableCoverage?: boolean;
    enableNodePolyfills?: boolean;
    enableWebpackProgress?: boolean;
};
