import { getMDX } from './getMDX';

const DEFAULT_RENDERER = `
import React from 'react';
`;

module.exports = async function (content) {
    const callback = this.async();
    const loaderOptions = this.getOptions();
    const { addonOptions } = loaderOptions;

    try {
        const result = await getMDX(this.resourcePath, addonOptions);
        const code = `${DEFAULT_RENDERER}\n${result}`;
        return callback(null, code);
    } catch (err) {
        console.error('Error loading:', this.resourcePath);
        return callback(err);
    }
};
