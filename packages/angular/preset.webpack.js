const path = require('path');
const webpack = require('webpack');

module.exports = {
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
            test: /\.(js|ts)$/,
            loader: '@jsdevtools/coverage-istanbul-loader',
            enforce: 'post',
            include: path.join(process.cwd(), 'src'),
            exclude: [/\.(e2e|spec|stories)\.ts$/, /node_modules/, /(ngfactory|ngstyle)\.js/],
        });
        config.plugins = [...(config.plugins || []).filter(p => !(p instanceof webpack.ProgressPlugin))];
        return config;
    },
}