const preview = require.resolve("../dist/esm/preset/preview");

export const previewAnnotations = (entries = [], options) => {
    return [...entries, preview];
}