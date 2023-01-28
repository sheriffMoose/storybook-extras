import { getMakeTitle as _getMakeTitle } from './getMakeTitle';

export const getCompileOptions = (fileName, addonOptions, getMakeTitle = _getMakeTitle) => {
    return {
        fileName,
        makeTitle: getMakeTitle(fileName, addonOptions),
    };
};
