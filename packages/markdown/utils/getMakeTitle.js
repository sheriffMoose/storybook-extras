const { resolve } = require('path');
const { readFileSync } = require('fs');

exports.getMakeTitle = function (fileName, addonOptions) {
    const { configDir, titles } = addonOptions;

    return userTitle => {
        const titleKey = Object.keys(titles || {}).find(key => resolve(configDir, key) === fileName);
        const content = readFileSync(fileName, 'utf8').toString();

        const htmlTitle = (content.match(/<title>(.*)<\/title>/i) || [])[1];
        const metaTitle = (content.match(/<meta title=[`'"“”‘’„”«»](.*)[`'"“”‘’„”«»] \/>/i) || [])[1];
        const markdownTitle = (content.match(/\{\/\*.*title:[`'"“”‘’„”«»](.*)[`'"“”‘’„”«»]\*\/\}/i) || [])[1];
        const addonTitle = (titles || {})[titleKey];
        const fileTitle = fileName.split('/').pop().split('.').shift().replace(/\+/g, '/');

        if (!userTitle || userTitle === fileName) {
            return [
                // order of precedence
                htmlTitle,
                metaTitle,
                markdownTitle,
                addonTitle,
                fileTitle,
            ].find(Boolean);
        }

        return userTitle;
    };
};
