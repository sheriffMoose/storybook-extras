export interface GlobalState {
    name: string | undefined;
    selected: string | undefined;
}

export interface ConsoleConfig {
    enabled?: boolean;
    patterns?: RegExp[];
    omitFirst?: boolean;
}

export interface DocsConfig {
    lazyLoad?: boolean;
    url?: string;
}

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

export interface WrapperConfig {
    enabled?: boolean;
    default?: string;
    values: Wrapper[];
}
