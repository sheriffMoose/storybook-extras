import { loadCsf } from '@storybook/csf-tools';
import { getMDX } from './getMDX';
import { SwaggerConfig } from './types';

export const storyIndexers = (indexers, addonOptions: SwaggerConfig) => {
    const test = /\.swagger.*$/;

    const indexer = async (fileName: string, compileOptions) => {
        const title = compileOptions.makeTitle().replace('/.swagger', '') || 'OpenAPI/Swagger Specs';
        const story = addonOptions.stories.find(story => story.title === title);

        const makeTitle = () => title;
        const code = await getMDX(story);

        const csf = loadCsf(code, { makeTitle, fileName });
        const parsed = csf.parse();
        return parsed;
    };

    return [{ test, indexer }, ...(indexers || [])];
};
