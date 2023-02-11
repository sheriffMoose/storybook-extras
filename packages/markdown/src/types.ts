export interface StoryConfig {
    path?: string;
    title?: string;
}

export interface MarkdownConfig {
    include?: string | RegExp;
    exclude?: RegExp[];
    stories?: StoryConfig[];
}
