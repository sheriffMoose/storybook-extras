const { getMDX: _getMDX } = require('./getMDX');
const { loadCsf } = require('@storybook/csf-tools');

exports.getIndexer = (addonOptions, getMDX = _getMDX) => {
    return async (fileName, compileOptions) => {
        // Convert MD/HTML to MDX
        const code = await getMDX(fileName, addonOptions);

        // Parse CSF component
        return loadCsf(code, compileOptions).parse();
    };
};
