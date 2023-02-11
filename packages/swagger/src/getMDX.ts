import { StoryConfig } from './types';
import { compile } from '@storybook/mdx2-csf';

const mdxCode = ({ url, title }: StoryConfig) => `
import { Meta } from '@storybook/blocks';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

<Meta title="${title}" />

<SwaggerUI url="${url}" />
`;

export const getMDX = async story => {
    const src = mdxCode(story);
    const code = await compile(src, {});
    return code;
};
