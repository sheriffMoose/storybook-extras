## Markdown Docs Demo

This file is just a demo of the possibility of importing Markdown Docs into Storybook.

This uses the following pattern:

```js
// .storybook/main.js
module.exports = {
    extras: {
        markdown: {
            titles: {
                '../stories/markdown-main-js.md': 'Markdown/main.js',
            },
        },
    },
};
```
