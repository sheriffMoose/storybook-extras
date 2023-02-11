import path from 'path';
const plugin = require('vite-plugin-require-transform');

export default options => {
    return plugin({
        ...options,
        importPrefix: '_require_',
        importPathHandler: (requirePath: string) => {
            return path.basename(requirePath).replace(/[\?\.\-\s\/\\]/g, '_');
        },
    });
};
