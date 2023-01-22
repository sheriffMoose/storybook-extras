module.exports = {
    framework: "@storybook/react-webpack5",
    stories: ['../stories/**/*.(story|stories).@(js|jsx|ts|tsx)'],
    addons: ["../preset.js", "@storybook/addon-essentials"],
};