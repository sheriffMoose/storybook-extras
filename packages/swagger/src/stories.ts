export const stories = (entries = [], options) => {
    if (options.openapiURL) {
        entries.push(options.extraStoryPath);
    }
    return [...entries];
};
