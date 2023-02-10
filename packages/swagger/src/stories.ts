export const stories = (entries = [], options) => {
    const extraStoryPath = require.resolve('../stories/swagger.stories.mdx');

    if (options.openapiURL) {
        entries.push(extraStoryPath);
    }

    return [...entries];
};
