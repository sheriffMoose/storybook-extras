export interface DocsParameter {
    compodoc?: any;
    fetch?: string;
}

export interface SourceCodeParameter {
    disable?: boolean;
}

export interface Wrapper {
    name: string;
    value: string;
}

export interface WrappersParameter {
    disable?: boolean;
    default?: string;
    values: Wrapper[];
}

export type AngularConfig = {
    enableCoverage?: boolean;
    enableNodePolyfills?: boolean;
    enableWebpackProgress?: boolean;
};
