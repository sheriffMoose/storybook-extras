const { makeTitle } = require('./makeTitle');

// This file is used to set the compile options for the markdown compiler.
exports.compileOptions = (fileName, addonOptions) => {
    return {
        fileName,
        makeTitle: makeTitle(fileName, addonOptions),
    };
};
