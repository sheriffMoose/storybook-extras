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

export interface ConsoleConfig {
    enabled?: boolean;
    patterns?: RegExp[];
    omitFirst?: boolean;
}

export interface DocsConfig {
    lazyLoad?: boolean;
    url?: string;
}

export interface SourceCodeConfig {
    enabled?: boolean;
}

export interface WrappersConfig {
    enabled?: boolean;
    default?: string;
    values: Wrapper[];
}

export interface ngExtrasConfig {
    console?: ConsoleConfig;
    docs?: DocsConfig;
    sourceCode?: SourceCodeConfig;
    wrappers?: WrappersConfig;
}
