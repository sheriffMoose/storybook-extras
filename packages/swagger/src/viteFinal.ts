import { mergeConfig, InlineConfig } from 'vite';
import { getMDX } from './getMDX';
import { SwaggerConfig } from './types';

export const viteFinal = async (config: InlineConfig, options: SwaggerConfig) => {
    return mergeConfig(config, {
        plugins: [
            {
                name: 'swagger',
                async transform(...args) {
                    if (/\.swagger$/.test(args[1])) {
                        const code = await getMDX(options.stories[0]);
                        return { code, map: null };
                    }
                },
            },
        ],
    });
};
