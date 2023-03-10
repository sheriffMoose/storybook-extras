import { core } from './core';
import { viteFinal } from './vite/viteFinal';
import { webpackFinal } from './webpack/webpackFinal';
import { previewHead } from './previewHead';

const manager = require.resolve('./manager');
const preview = require.resolve('./preview');

const managerEntries = (entries = []) => [...entries, manager];
const previewAnnotations = (entries = []) => [...entries, preview];

export default {
    core,
    managerEntries,
    previewAnnotations,
    viteFinal,
    webpackFinal,
    previewHead,
};
