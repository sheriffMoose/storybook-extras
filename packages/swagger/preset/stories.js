export const stories = (entry = [], options) => {
    if (options.openapiURL) {
        entry.push(require.resolve('./openapi.mdx'));
    }

    return [...entry];
};
