import path from 'path';
import { SwaggerConfig } from './types';

export const stories = (entries = [], options: SwaggerConfig) => {
    (options.stories || []).forEach(story => {
        entries.push({
            titlePrefix: story.title,
            directory: path.resolve(__dirname, '../stories'),
            files: '.swagger',
        });
    });

    return [...entries];
};
