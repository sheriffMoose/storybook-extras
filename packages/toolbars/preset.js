const manager = require.resolve("./dist/esm/manager");
const preview = require.resolve("./dist/esm/preview");

module.exports = {
    managerEntries: (entries = []) => [...entries, manager],
    previewAnnotations: (entries = []) => [...entries, preview],
}