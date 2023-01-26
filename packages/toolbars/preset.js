const manager = require.resolve("./dist/esm/manager");
const preview = require.resolve("./dist/esm/preview");

export default {
    managerEntries: (entries = []) => [...entries, manager],
    previewAnnotations: (entries = []) => [...entries, preview],
}