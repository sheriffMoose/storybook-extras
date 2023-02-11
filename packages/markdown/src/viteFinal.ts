import { getMDX } from '@storybook-extras/devkit';
import { mergeConfig, InlineConfig } from 'vite';
import { MarkdownConfig } from './types';

export const viteFinal = async (config: InlineConfig, options: MarkdownConfig) => {
    return mergeConfig(config, {
        plugins: [
            {
                name: 'markdown',
                async transform(src, fileName) {
                    if (/\.(md|html)$/.test(fileName)) {
                        const code = await getMDX(fileName, options);
                        return { code, map: null };
                    }
                },
            },
        ],
    });
};
