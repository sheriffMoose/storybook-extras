export const addons = (options) => {
    const entries = [];

    if (!options.disableMarkdown) {
        entries.push({
            name: '@sheriffmoose/storybook-md',
            options: {
                mdExclude: [/\.component\.html$/]
            }
        })
    }

    return entries;
}