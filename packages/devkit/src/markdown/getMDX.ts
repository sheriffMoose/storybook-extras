import { compile, CompileOptions } from '@storybook/mdx2-csf';
import { getCompileOptions } from './getCompileOptions';
import { existsSync, readFileSync } from 'fs';

const mdxCode = (title, content) => `

import { Meta } from '@storybook/blocks';

<Meta title='${title}' />

${content}

`;

const _toMDX = (fileName, addonOptions) => {
    // Read the file
    const content = existsSync(fileName) ? readFileSync(fileName, 'utf8') : '';
    // Get the compile options
    const options = getCompileOptions(fileName, addonOptions);
    // Get the title
    const title = options.makeTitle(fileName);

    const code = mdxCode(title, content);

    return { code, options };
};

export const getMDX = async (fileName, addonOptions, toMDX = _toMDX) => {
    // Generate MDX code
    const { code, options } = toMDX(fileName, addonOptions);

    // Compile MDX into CSF
    const csfCode = await compile(code, options as CompileOptions);

    return csfCode;
};
