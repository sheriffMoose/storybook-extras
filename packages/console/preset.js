const preview = require.resolve("./main/preview");

export default {
    previewAnnotations: (entries = []) => [...entries, preview]
}