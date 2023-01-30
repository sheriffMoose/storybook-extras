const preview = require.resolve("./dist/esm/preview");

export default {
    previewAnnotations: (entries = []) => [...entries, preview]
}