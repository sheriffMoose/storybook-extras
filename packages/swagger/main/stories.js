export const stories = (entries = [], options) => {
    if (options.openapiURL) {
        entries.push(require.resolve('./openapi.story.mdx'));
    }
    return [...entries];
};
