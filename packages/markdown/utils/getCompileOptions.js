const { getMakeTitle: _getMakeTitle } = require('./getMakeTitle');

exports.getCompileOptions = (fileName, addonOptions, getMakeTitle = _getMakeTitle) => {
    return {
        fileName,
        makeTitle: getMakeTitle(fileName, addonOptions),
    };
};
