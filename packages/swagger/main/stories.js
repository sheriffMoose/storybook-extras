export const stories = (entries = [], options) => {
    if (options.openapiURL) {
        entries.push(require.resolve('./openapi.mdx'));
    }

    return [...entries];
};
