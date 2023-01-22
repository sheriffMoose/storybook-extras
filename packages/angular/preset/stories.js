export const stories = (entry = [], options) => {
    if (options.openapiURL) {
        entry.push(require.resolve('../stories/openapi.mdx'));
    }

    return [...entry];
}