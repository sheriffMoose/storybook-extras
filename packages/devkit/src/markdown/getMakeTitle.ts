import { resolve } from 'path';

export const getMakeTitle = (fileName: string, addonOptions: any) => {
    const { configDir, stories } = addonOptions;

    return (userTitle: string) => {
        const content = require('fs').readFileSync(fileName, 'utf8').toString();

        const htmlTitle = (content.match(/<title>(.*)<\/title>/i) || [])[1];
        const metaTitle = (content.match(/<meta title=[`'"“”‘’„”«»](.*)[`'"“”‘’„”«»] \/>/i) || [])[1];
        const markdownTitle = (content.match(/\{\/\*.*title:[`'"“”‘’„”«»](.*)[`'"“”‘’„”«»]\*\/\}/i) || [])[1];
        const addonTitle = (stories || []).find(story => resolve(configDir, story.path) === fileName)?.title || '';
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
