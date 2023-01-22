import path from 'path';
import webpack from 'webpack';

const except = (plugins, toRemove) => {
    return (plugins || []).filter(p => !toRemove.some(i => p instanceof i));
}

export const webpackFinal = async (config, options) => {

    config.module.rules.push({
        test: /\.(js|ts)$/,
        loader: '@jsdevtools/coverage-istanbul-loader',
        enforce: 'post',
        include: path.join(process.cwd(), 'src'),
        exclude: [
            /\.(e2e|spec|stories)\.ts$/,
            /node_modules/,
            /(ngfactory|ngstyle)\.js/
        ],
    });

    config.plugins = [
        ...except(config.plugins, [webpack.ProgressPlugin])
    ];
    
    return config;
}