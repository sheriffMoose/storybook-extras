import { loadCsf } from '@storybook/csf-tools';
import { compile } from '@storybook/mdx2-csf';
import { resolve } from 'path';

export function getIndexer(options) {
    const { configDir, titles } = options;

    return async (fileName, opts) => {
        const titleKey = Object.keys(titles).find(key => resolve(configDir, key) === fileName) || '';
        opts.makeTitle = useTitle => titles[titleKey] || useTitle;

        // Convert Markdown into MDX
        const source = `
            import { Description, Meta, Story } from '@storybook/blocks';

            <Meta title='Markdown Docs' />
            <Description>{require('${fileName}')}</Description>
        `;

        // Compile MDX into CSF
        const code = await compile(source, {});

        // Parse CSF component
        return loadCsf(code, { ...opts, fileName }).parse();
    };
}
