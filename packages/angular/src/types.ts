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
    disable?: boolean;
    patterns?: RegExp[];
    omitFirst?: boolean;
}

export interface DocsConfig {
    lazyLoad?: boolean;
    url?: string;
}

export interface SourceCodeConfig {
    disable?: boolean;
}

export interface WrappersConfig {
    disable?: boolean;
    default?: string;
    values: Wrapper[];
}

export interface ngExtrasConfig {
    console?: ConsoleConfig;
    docs?: DocsConfig;
    sourceCode?: SourceCodeConfig;
    wrappers?: WrappersConfig;
}
