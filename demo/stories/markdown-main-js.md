## Markdown Docs Demo

This file is just a demo of the possibility of importing Markdown Docs into Storybook.

This uses the following pattern:

```ts
// .storybook/main.ts
export default {
    extras: {
        markdown: {
            titles: {
                '../stories/markdown-main-js.md': 'Markdown/main.js',
            },
        },
    },
};
```
