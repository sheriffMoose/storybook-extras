const manager = require.resolve('./manager');
const preview = require.resolve('./preview');

export default {
    managerEntries: (entries = []) => [...entries, manager],
    previewAnnotations: (entries = []) => [...entries, preview],
};
