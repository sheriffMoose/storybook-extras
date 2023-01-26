import { getMDX } from './getMDX';
import { loadCsf } from '@storybook/csf-tools';

export function getIndexer(addonOptions) {
    return async (fileName, compileOptions) => {
        // Convert MD/HTML to MDX
        const code = await getMDX(fileName, addonOptions);

        // Parse CSF component
        return loadCsf(code, compileOptions).parse();
    };
}
