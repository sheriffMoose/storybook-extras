import { InlineConfig, mergeConfig } from 'vite';
import { getMDX } from './getMDX';
import { storyFileName, SwaggerConfig } from './types';

export const viteFinal = async (config: InlineConfig, options: SwaggerConfig) => {
    return mergeConfig(config, {
        plugins: [
            {
                name: 'swagger',
                async transform(src, fileName) {
                    const regex = new RegExp(storyFileName)
                    if (regex.test(fileName)) {
                        const code = await getMDX(fileName, options);
                        return { code, map: null };
                    }
                },
            },
        ],
    });
};
