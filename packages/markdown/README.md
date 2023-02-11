<div align="center">

<img src="https://raw.githubusercontent.com/sheriffMoose/storybook-extras/master/logos/markdown.svg" alt="logo" width="200" />

<h1>Markdown Docs</h1>
<p>Storybook addon for auto importing markdown/html docs.</p>

![][img.node]
[![][img.npm]][link.npm]
[![][img.storybook]][link.npm]

[![][img.banner]][link.npm]

</div>

<h2>Table of Contents</h2>

- [Getting started](#getting-started)
- [Custom Titles](#custom-titles)
  - [Predefined Titles](#predefined-titles)
- [Read More](#read-more)

## Getting started

1. Install the addon:

```shell
yarn add @storybook-extras/markdown -D
```

2. Add the addon to your Storybook config:

```ts
// .storybook/main.ts
import { StorybookConfig } from '@storybook/angular';
import { ExtrasConfig } from '@storybook-extras/preset';

const config: StorybookConfig & ExtrasConfig = {
    ...
    "stories": [
        "../*.@(md|html)",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook-extras/markdown",
        ...
    ],
    ...
}

export default config;
```

3. Optionally you may want to pass `include` and/or `exclude` options if needed like so:

```ts
export default {
    addons: [
        {
            name: '@storybook-extras/markdown',
            options: {
                include: '../stories/**/*.@(md|html)',
                exclude: [/\.component\.html$/],
                stories: [
                    {
                        path: '../stories/markdown-main-js.md',
                        title: 'Markdown/main.js',
                    },
                ],
            },
        },
    ],
};
```

That's it, you're done. Now you will find README & CHANGELOG along with HTML docs if you want as well, in your Storybook sidebar and you can open them and see the contents.

## Custom Titles

Currently Storybook will be using the file name as the story title, e.g. `README.md` will be `README`. This addon supports multiple options to customize the title for your `.md` & `.html` files.

| Precedence | Option                                                                              | Example                                                        |
| ---------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| 1          | Use the HTML `title` tag                                                            | `<title>Docs/Custom Title</title>`                             |
| 2          | Use the HTML `meta` tag, usign `Meta` will throw an error                           | `<meta title="Custom Title" />`                                |
| 3          | Uses a markdown comment in the file                                                 | `{/*title:"Custom Title"*/}`                                   |
| 4          | Use predefined list of titles from `main.js`                                        | See below                                                      |
| 5          | Use the filename with a `+` to separate the title. Note: full path will be omitted. | `Markdown+Custom Title.md` **becomes** `Markdown/Custom Title` |

### Predefined Titles

```ts
// .storybook/main.ts
import { StorybookConfig } from '@storybook/angular';
import { ExtrasConfig } from '@storybook-extras/preset';

const config: StorybookConfig & ExtrasConfig = {
    // if you are using @storybook-extras/markdown
    addons: [
        {
            name: '@storybook-extras/markdown',
            options: {
                titles: {
                    '../README.md': 'Custom Title',
                },
            },
        },
    ],
    // if you are using @storybook-extras/preset
    extras: {
        markdown: {
            titles: {
                '../README.md': 'Custom Title',
            },
        },
    },
};

export default config;
```

**NOTE**:
Custom Title processing is dependendant on [`#20809`](https://github.com/storybookjs/storybook/pull/20809)

## Read More

I have written a series of articles to explain the motivation and purpose behind this addon. Feel free to read through.

-   [`Addon-Kit is a developer’s dream come true`](https://sheriffmoose.medium.com/storybook-addon-kit-is-a-developers-dream-come-true-65ab254970d5)
-   [`Storybook Markdown Docs (not mdx)`](https://sheriffmoose.medium.com/storybook-markdown-docs-not-mdx-cfa25632ebfc)
-   [`Storybook Markdown Docs (not mdx) Part 2`](https://sheriffmoose.medium.com/storybook-markdown-docs-not-mdx-part-2-757463fcad84)
-   [`Storybook Addon for Auto Markdown Import`](https://sheriffmoose.medium.com/storybook-addon-for-auto-markdown-import-74f58b6d9c5c)
-   [`Support .html files in Storybook`](https://sheriffmoose.medium.com/support-html-files-in-storybook-9e4da45a829a)
-   [`Custom Titles for Storybook Docs?`](https://sheriffmoose.medium.com/custom-titles-for-storybook-docs-644927607692)

Also make sure to check out these PRs that made this addon possible:

-   [`storybookjs/storybook #20679 Update Story Indexer to support DocsOnly pages from Markdown/HTML`](https://github.com/storybookjs/storybook/pull/20679)
-   [`storybookjs/docs-mdx #10 Add support for Markdown/HTML titles`](https://github.com/storybookjs/docs-mdx/pull/10)

[img.node]: https://img.shields.io/node/v/@storybook-extras/console?logo=node.js&logoColor=white&labelColor=339933&color=grey&label=
[img.npm]: https://img.shields.io/npm/v/@storybook-extras/markdown?logo=npm&logoColor=white&labelColor=CB3837&color=grey&label=
[img.storybook]: https://img.shields.io/npm/dependency-version/@storybook-extras/markdown/dev/storybook?logo=storybook&logoColor=white&labelColor=FF4785&color=grey&label=
[img.banner]: https://nodei.co/npm/@storybook-extras/markdown.png
[link.npm]: https://npmjs.org/package/@storybook-extras/markdown
