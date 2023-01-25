const preview = require.resolve("./src/preview");

export default {
    previewAnnotations: (entries = []) => [...entries, preview]
}