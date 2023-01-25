<div align="center">

<img src="https://github.com/sheriffMoose/storybook-extras/blob/master/logos/extras.png?raw=true" alt="logo" width="200" />

<h1>Storybook Extras</h1>

<p>Storybook addons library with a bunch of useful features along with other nice-to-haves and definitely silly features.</p>

[![][badge.release]][link.release]
[![][badge.license]][link.license]

![][badge.node]
![][badge.npm]
![][badge.downloads]

[![][badge.storybook]][link.npm]

[![][badge.health]][link.snyk]

[![][badge.banner]][link.npm]

</div>

<h2>Table of Contents</h2>

- [Getting started](#getting-started)
- [Demo/Chromatic](#demochromatic)
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
        }
    }
}
```

4. Refer to the sections below for the documentation of the respective addons.

## Demo/Chromatic

Find the published demo storybook on chromatic [here](https://master--63c1a45beed1a8f036a44e28.chromatic.com/)

## Addons

| Addon              | Description                                 | Version                                      |                                                                                                 |
| ------------------ | ------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Preset | Storybook Extras | [![addon.preset.img]][addon.preset.link]     | [`Docs`](https://github.com/sheriffMoose/storybook-extras/#readme)
| Angular            | Extra features for Angular                  | [![][addon.angular.img]][addon.angular.link] | [`Docs`](https://github.com/sheriffMoose/storybook-extras/tree/master/packages/angular#readme)  |
| Console Logs       | Display console logs in the storybook       | [![addon.console.img]][addon.console.link]   | [`Docs`](https://github.com/sheriffMoose/storybook-extras/tree/master/packages/console#readme)  |
| Markdown/HTML Docs | Display markdown/html docs in the storybook | [![addon.markdown.img]][addon.markdown.link] | [`Docs`](https://github.com/sheriffMoose/storybook-extras/tree/master/packages/markdown#readme) |
| OpenAPI/Swagger UI | Display OpenAPI/Swagger UI in the storybook | [![addon.swagger.img]][addon.swagger.link]   | [`Docs`](https://github.com/sheriffMoose/storybook-extras/tree/master/packages/swagger#readme)  |

[addon.preset.img]: https://img.shields.io/npm/v/@storybook-extras/preset?logo=storybook&logoColor=white&label=&color=grey&labelColor=FF4785&style=for-the-badge
[addon.preset.link]: https://www.npmjs.com/package/@storybook-extras/preset
[addon.angular.img]: https://img.shields.io/npm/v/@storybook-extras/angular?logo=angular&label=&color=grey&labelColor=DD0031&style=for-the-badge
[addon.angular.link]: https://www.npmjs.com/package/@storybook-extras/angular
[addon.console.img]: https://img.shields.io/npm/v/@storybook-extras/console?logo=windowsterminal&label=&color=grey&labelColor=339933&logoColor=white&style=for-the-badge
[addon.console.link]: https://www.npmjs.com/package/@storybook-extras/console
[addon.markdown.img]: https://img.shields.io/npm/v/@storybook-extras/markdown?logo=markdown&label=&color=grey&labelColor=orange&style=for-the-badge
[addon.markdown.link]: https://www.npmjs.com/package/@storybook-extras/markdown
[addon.swagger.img]: https://img.shields.io/npm/v/@storybook-extras/swagger?logo=swagger&label=&color=grey&labelColor=85EA2D&logoColor=black&style=for-the-badge
[addon.swagger.link]: https://www.npmjs.com/package/@storybook-extras/swagger
[badge.logo]: https://github.com/sheriffMoose/storybook-extras/blob/master/logo.png?raw=true
[badge.release]: https://badge.shields.io/github/actions/workflow/status/sheriffMoose/storybook-extras/release.yml?logo=github&label=release
[badge.license]: https://badge.shields.io/github/license/sheriffMoose/storybook-extras?logo=github
[badge.node]: https://badge.shields.io/node/v/@storybook-extras/preset?logo=node.js&logoColor=white&labelColor=339933&color=grey&label=
[badge.npm]: https://badge.shields.io/npm/v/@storybook-extras/preset?logo=npm&logoColor=white&labelColor=CB3837&color=grey&label=
[badge.downloads]: https://badge.shields.io/npm/dt/@storybook-extras/preset?logo=docusign&logoColor=white&labelColor=purple&color=grey&label=
[badge.angular]: https://badge.shields.io/npm/dependency-version/@storybook-extras/preset/dev/@angular/core?logo=angular&labelColor=DD0031&color=grey&label=
[badge.storybook]: https://badge.shields.io/npm/dependency-version/@storybook-extras/preset/dev/storybook?logo=storybook&logoColor=white&labelColor=FF4785&color=grey&label=
[badge.typescript]: https://badge.shields.io/npm/dependency-version/@storybook-extras/preset/dev/typescript?logo=typescript&logoColor=white&labelColor=3178C6&color=grey&label=
[badge.health]: https://snyk.io/advisor/npm-package/@storybook-extras/preset/badge.svg
[badge.banner]: https://nodei.co/npm/@storybook-extras/preset.png
[link.release]: https://github.com/sheriffMoose/storybook-extras/actions/workflows/release.yml
[link.license]: https://github.com/sheriffMoose/storybook-extras/blob/master/LICENSE
[link.npm]: https://npmjs.org/package/@storybook-extras/preset
[link.snyk]: https://snyk.io/advisor/npm-package/@storybook-extras/preset
