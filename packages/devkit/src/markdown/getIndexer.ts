import { getMDX as _getMDX } from './getMDX';
import { loadCsf } from '@storybook/csf-tools';

export const getIndexer = (addonOptions, getMDX = _getMDX) => {
    return async (fileName, compileOptions) => {
        // Generate MDX
        const code = await getMDX(fileName, addonOptions);

        // Parse CSF component
        return loadCsf(code, compileOptions).parse();
    };
};
