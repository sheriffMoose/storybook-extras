import path from 'path';
import { storyFileName, SwaggerConfig } from './types';

export const stories = (entries = [], options: SwaggerConfig) => {
    const story = (options.stories || [])[0];
    if (story) {
        entries.push({
            titlePrefix: story.title,
            directory: path.resolve(__dirname, '../stories'),
            files: storyFileName,
        });
    }

    return [...entries];
};
