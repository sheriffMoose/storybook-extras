const manager = require.resolve("../dist/esm/preset/manager");

export const managerEntries = (entries = [], options) => {
    return [...entries, manager];
}