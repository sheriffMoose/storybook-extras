export interface StoryConfig {
    path?: string;
    title?: string;
}

export interface MarkdownConfig {
    includes?: string | RegExp;
    excludes?: RegExp[];
    stories?: StoryConfig[];
}
