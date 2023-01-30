const { env, stories } = require('./dist/esm');

const extraStoryPath = require.resolve('./stories/openapi.story.mdx');

module.exports = {
    env,
    stories: (entries = [], options) => stories(entries, { ...options, extraStoryPath }),
};
