export const ADDON_ID = '@storybook-extras/swagger';
export const storyFileName = 'swagger.stories.txt';

export interface StoryConfig {
    title?: string;
    url?: string;
}

export interface SwaggerConfig {
    stories?: StoryConfig[];
}
