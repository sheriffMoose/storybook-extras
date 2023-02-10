import { mergeConfig } from 'vite';

export const viteFinal = async (config, options) => {
    const env = await options.presets.apply('env', {});

    return mergeConfig(config, {
        define: {
            'process.env': env,
        },
    });
};
