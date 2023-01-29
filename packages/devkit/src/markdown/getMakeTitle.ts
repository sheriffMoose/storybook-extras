export const getMakeTitle = (fileName: string, addonOptions: any) => {
    const { configDir, titles } = addonOptions;

    return (userTitle: string) => {
        const titleKey = Object.keys(titles || {}).find(key => require('path').resolve(configDir, key) === fileName) || '';
        const content = require('fs').readFileSync(fileName, 'utf8').toString();

        const htmlTitle = (content.match(/<title>(.*)<\/title>/i) || [])[1];
        const metaTitle = (content.match(/<meta title=[`'"“”‘’„”«»](.*)[`'"“”‘’„”«»] \/>/i) || [])[1];
        const markdownTitle = (content.match(/\{\/\*.*title:[`'"“”‘’„”«»](.*)[`'"“”‘’„”«»]\*\/\}/i) || [])[1];
        const addonTitle = (titles || {})[titleKey];
        const fileTitle = fileName.match(/\/([^\/]+)\.[^\/]+$/)[1].replace(/\+/g, '/');

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
