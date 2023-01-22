export const addons = (options) => {
    if (options.disableMarkdown) {
        return [];
    }

    return [
        {
            name: '@sheriffmoose/storybook-md',
            options: {
                mdExclude: [/\.component\.html$/]
            }
        }
    ]
}