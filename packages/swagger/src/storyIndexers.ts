import { loadCsf } from '@storybook/csf-tools';
import { getMDX } from './getMDX';
import { SwaggerConfig, storyFileName } from './types';

export const storyIndexers = (indexers, addonOptions: SwaggerConfig) => {
    const test = new RegExp(storyFileName);

    const indexer = async (fileName: string, compileOptions) => {
        const title = compileOptions.makeTitle().replace(`/${storyFileName.split('.')[0]}`, '') || 'OpenAPI/Swagger Specs';

        const makeTitle = () => title;
        const code = await getMDX(fileName, addonOptions);

        const csf = loadCsf(code, { makeTitle, fileName });
        const parsed = csf.parse();
        return parsed;
    };

    return [{ test, indexer }, ...(indexers || [])];
};
