export interface GlobalState {
    name: string | undefined;
    selected: string | undefined;
}

export interface ConsoleConfig {
    disable?: boolean;
    filter?: string;
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
    default?: string;
    disable?: boolean;
    values: Wrapper[];
}

export interface ngExtrasParameter {
    console?: ConsoleConfig;
    docs?: DocsConfig;
    wrapper?: WrapperConfig;
}