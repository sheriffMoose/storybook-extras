export const PARAM_KEY = `console`;
export const DECORATOR_NAME = `${PARAM_KEY}Decorator`;

export interface ConsoleParameter {
    disable?: boolean;
    patterns?: RegExp[];
    omitFirst?: boolean;
}

export interface ConsoleConfig {}
