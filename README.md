<div align="center" style="align:center;">
    <img src="https://github.com/sheriffMoose/storybook-extras/blob/master/logos/extras.svg?raw=true" alt="logo" width="200" />
    <h1>Storybook Extras</h1>
    <p>Storybook addons library with a bunch of useful features along with other nice-to-haves and definitely silly features.</p>

[![][badge.release]][link.release]
[![][badge.license]][link.license]

![][badge.node]
![][badge.npm]
[![][badge.storybook]][link.npm]

[![][badge.banner]][link.npm]

</div>

<h2>Table of Contents</h2>

- [Getting started](#getting-started)
- [Demo](#demo)
- [Addons](#addons)

## Getting started

1. Install the addon:

```js
yarn add @storybook-extras/preset -D
```

2. Add the addon

```js
// .storybook/main.js
module.exports = {
    ...
    "addons": [
        "@storybook-extras/preset",
        ...
    ],
    ...
}
```

3. To disable the built-in features, add the following to your `main.js`:

```js
// .storybook/main.js
module.exports = {
    ...
    "addons": [
        "@storybook-extras/preset",
        ...
    ],
    ...
    "extras": {
        // disable Angular addon
        // by default it will only be added ONLY if the `framework` is set to `@storybook/angular`
        "angular": false,

        // disable console logs
        // further options are configurable in the `preview.js` file
        // please see the `Console` addon docs for more info
        "console": false,

        // disable markdown/html docs
        "markdown": false,
        // set options for markdown/html docs
        "markdown": {
            "mdInclude": path.join(process.cwd(), 'src'),
            "mdExclude": [/\.component.html$/] // exclude angular component html files
        }

        // disable swagger docs completely
        "swagger": false,
        // set openapi url for swagger docs
        "swagger": {
            "openapiURL": "https://petstore.swagger.io/v2/swagger.json"
        },

    }
}
```

4. Refer to the sections below for the documentation of the respective addons.

## Demo

Find the published demo storybook [here](https://sheriffmoose.github.io/storybook-extras/)

## Addons

| | Addon              | Description                                 | Version                                      |                                                                                                 |
| --- | ------------------ | ------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| <img src="https://raw.githubusercontent.com/sheriffMoose/storybook-extras/master/logos/extras.svg" with="50" height="50" /> | Preset | Storybook Extras | [![addon.preset.img]][addon.preset.link]     | [Docs][addon.preset.readme]
| <img src="https://raw.githubusercontent.com/sheriffMoose/storybook-extras/master/logos/angular.svg" with="50" height="50" /> | Angular            | Extra features for Angular                  | [![][addon.angular.img]][addon.angular.link] | [Docs][addon.angular.readme]  |
| <img src="https://raw.githubusercontent.com/sheriffMoose/storybook-extras/master/logos/console.svg" with="50" height="50" /> |  Console Logs       | Display console logs in the storybook       | [![addon.console.img]][addon.console.link]   | [Docs][addon.console.readme]  |
| <img src="https://raw.githubusercontent.com/sheriffMoose/storybook-extras/master/logos/markdown.svg" with="50" height="50" /> |  Markdown/HTML Docs | Display markdown/html docs in the storybook | [![addon.markdown.img]][addon.markdown.link] | [Docs][addon.preset.readme] |
| <img src="https://raw.githubusercontent.com/sheriffMoose/storybook-extras/master/logos/swagger.svg" with="50" height="50" /> |  OpenAPI/Swagger UI | Display OpenAPI/Swagger UI in the storybook | [![addon.swagger.img]][addon.swagger.link]   | [Docs][addon.swagger.readme] |
| <img src="https://raw.githubusercontent.com/sheriffMoose/storybook-extras/master/logos/toolbars.svg" with="50" height="50" /> |  Toolbar Buttons | Makes adding a custom toolbar button a breathe | [![addon.toolbars.img]][addon.toolbars.link]   | [Docs][addon.toolbars.readme]  |
| <img src="https://raw.githubusercontent.com/sheriffMoose/storybook-extras/master/logos/variants.svg" with="50" height="50" /> |  Story Variants | Display all variants of a story in one story page all together | [![addon.variants.img]][addon.variants.link]   | [Docs][addon.variants.readme]  |

[addon.preset.img]: https://img.shields.io/npm/v/@storybook-extras/preset?label=&color=FF4785&style=for-the-badge
[addon.preset.link]: https://www.npmjs.com/package/@storybook-extras/preset
[addon.preset.readme]: https://github.com/sheriffMoose/storybook-extras/#readme
[addon.angular.img]: https://img.shields.io/npm/v/@storybook-extras/angular?label=&color=FF4785&style=for-the-badge
[addon.angular.link]: https://www.npmjs.com/package/@storybook-extras/angular
[addon.angular.readme]: https://github.com/sheriffMoose/storybook-extras/tree/master/packages/angular#readme
[addon.console.img]: https://img.shields.io/npm/v/@storybook-extras/console?label=&color=FF4785&style=for-the-badge
[addon.console.link]: https://www.npmjs.com/package/@storybook-extras/console
[addon.console.readme]: https://github.com/sheriffMoose/storybook-extras/tree/master/packages/console#readme
[addon.markdown.img]: https://img.shields.io/npm/v/@storybook-extras/markdown?label=&color=FF4785&style=for-the-badge
[addon.markdown.link]: https://www.npmjs.com/package/@storybook-extras/markdown
[addon.markdown.readme]: https://github.com/sheriffMoose/storybook-extras/tree/master/packages/markdown#readme
[addon.swagger.img]: https://img.shields.io/npm/v/@storybook-extras/swagger?label=&color=FF4785&style=for-the-badge
[addon.swagger.link]: https://www.npmjs.com/package/@storybook-extras/swagger
[addon.swagger.readme]: https://github.com/sheriffMoose/storybook-extras/tree/master/packages/swagger#readme
[addon.toolbars.img]: https://img.shields.io/npm/v/@storybook-extras/toolbars?label=&color=FF4785&style=for-the-badge
[addon.toolbars.link]: https://www.npmjs.com/package/@storybook-extras/toolbars
[addon.toolbars.readme]: https://github.com/sheriffMoose/storybook-extras/tree/master/packages/toolbars#readme
[addon.variants.img]: https://img.shields.io/npm/v/@storybook-extras/variants?label=&color=FF4785&style=for-the-badge
[addon.variants.link]: https://www.npmjs.com/package/@storybook-extras/variants
[addon.variants.readme]: https://github.com/sheriffMoose/storybook-extras/tree/master/packages/variants#readme

[logo]: https://github.com/sheriffMoose/storybook-extras/blob/master/logos/extras.svg?raw=true

[badge.release]: https://img.shields.io/github/actions/workflow/status/sheriffMoose/storybook-extras/release.yml?logo=github&label=release
[badge.license]: https://img.shields.io/github/license/sheriffMoose/storybook-extras?logo=github

[badge.node]: https://img.shields.io/node/v/@storybook-extras/preset?logo=node.js&logoColor=white&labelColor=339933&color=grey&label=
[badge.npm]: https://img.shields.io/npm/v/@storybook-extras/preset?logo=npm&logoColor=white&labelColor=CB3837&color=grey&label=
[badge.storybook]: https://img.shields.io/npm/dependency-version/@storybook-extras/preset/dev/storybook?logo=storybook&logoColor=white&labelColor=FF4785&color=grey&label=

[badge.banner]: https://nodei.co/npm/@storybook-extras/preset.png

[link.release]: https://github.com/sheriffMoose/storybook-extras/actions/workflows/release.yml
[link.license]: https://github.com/sheriffMoose/storybook-extras/blob/master/LICENSE
[link.npm]: https://npmjs.org/package/@storybook-extras/preset
