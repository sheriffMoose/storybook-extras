const { readFileSync } = require('fs');
const { compile } = require('@storybook/mdx2-csf');
const { compileOptions } = require('./compileOptions');

const toMDX = (title, content) => `
import { Description, Meta } from '@storybook/blocks';

<Meta title='${title}' />

${content}
`;

exports.getMDX = async function (fileName, addonOptions) {
    // Get the compile options
    const options = compileOptions(fileName, addonOptions);

    // Read the file
    const content = readFileSync(fileName, 'utf8');

    // Get the title
    const title = options.makeTitle(fileName);

    // Convert Markdown into MDX
    const mdxCode = toMDX(title, content);

    // Compile MDX into CSF
    const csfCode = await compile(mdxCode, options);

    return csfCode;
};
