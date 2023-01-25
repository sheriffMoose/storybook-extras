<div align="center">

<img src="https://github.com/storybook-extras/blob/master/logos/markdown.png?raw=true" alt="logo" width="200" />

<h1>Markdown Docs</h1>
<p>Storybook addon for auto importing markdown/html docs.</p>

![][img.node]
[![][img.npm]][link.npm]
[![][img.storybook]][link.npm]

[![][img.banner]][link.npm]

</div>

<h2>Table of Contents</h2>

- [Getting started](#getting-started)
- [Read More](#read-more)

## Getting started

1. Install the addon:

```js
yarn add @storybook-extras/markdown -D
```

2. Add the addon to your Storybook config:

```js
// .storybook/main.js
module.exports = {
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
```

3. Optionally you may want to pass `mdInclude` and/or `mdExclude` options if needed like so:

```js
module.exports = {
    addons: [
        {
            name: '@storybook-extras/markdown',
            options: {
                mdInclude: path.join(process.cwd(), 'src'),
                mdExclude: [/\.component\.html/] // Disable loading Angular component files
            }
        }
    ]
}
```

That's it, you're done. Now you will find README & CHANGELOG along with HTML docs if you want as well, in your Storybook sidebar and you can open them and see the contents.



## Read More

I have written a series of articles to explain the motivation and purpose behind this addon. Feel free to read through.

* [`Addon-Kit is a developer’s dream come true`](https://sheriffmoose.medium.com/storybook-addon-kit-is-a-developers-dream-come-true-65ab254970d5)
* [`Storybook Markdown Docs (not mdx)`](https://sheriffmoose.medium.com/storybook-markdown-docs-not-mdx-cfa25632ebfc)
* [`Storybook Markdown Docs (not mdx) Part 2`](https://sheriffmoose.medium.com/storybook-markdown-docs-not-mdx-part-2-757463fcad84)
* [`Storybook Addon for Auto Markdown Import`](https://sheriffmoose.medium.com/storybook-addon-for-auto-markdown-import-74f58b6d9c5c)
* [`Support .html files in Storybook`](https://sheriffmoose.medium.com/support-html-files-in-storybook-9e4da45a829a)

Also make sure to check out these PRs that made this addon possible:

* [`storybookjs/storybook #20679 Update Story Indexer to support DocsOnly pages from Markdown/HTML`](https://github.com/storybookjs/storybook/pull/20679)
* [`storybookjs/docs-mdx #10 Add support for Markdown/HTML titles`](https://github.com/storybookjs/docs-mdx/pull/10)











[img.node]:
https://img.shields.io/node/v/@storybook-extras/console?logo=node.js&logoColor=white&labelColor=339933&color=grey&label=
[img.npm]:
https://img.shields.io/npm/v/@storybook-extras/markdown?logo=npm&logoColor=white&labelColor=CB3837&color=grey&label=
[img.storybook]:
https://img.shields.io/npm/dependency-version/@storybook-extras/markdown/dev/storybook?logo=storybook&logoColor=white&labelColor=FF4785&color=grey&label=
[img.banner]:
https://nodei.co/npm/@storybook-extras/markdown.png

[link.npm]:
https://npmjs.org/package/@storybook-extras/markdown