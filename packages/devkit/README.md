<div align="center">

<img src="https://raw.githubusercontent.com/sheriffMoose/storybook-extras/master/logos/dynamic.svg" alt="logo" width="200" />

<h1>Storybook dynamic UI</h1>

<p>Storybook addon for displaying story for dynamic UI for backend APIs documentation & testing.</p>

![][img.node]
![][img.npm]
[![][img.storybook]][link.npm]

[![][img.banner]][link.npm]

</div>

<h2>Table of Contents</h2>

- [Getting started](#getting-started)
- [How to use](#how-to-use)
- [Roadmap](#roadmap)

## Getting started

1. Install the addon:

```js
yarn add @storybook-extras/dynamic -D
```

1. Add the addon

```js
// .storybook/main.js
module.exports = {
    ...
    "addons": [
        "@storybook-extras/dynamic",
        ...
    ],
    ...
}
```

## How to use

- OpenAPI (formly dynamic) is a popular specification for the management of RESTful APIs. Usually OpenAPI produces a `openapi.yml` or `openapi.json` file that can be used to integrate/visualize the APIs configured on the backend server.

- `dynamic UI` is a popular framework for the visualization of the `openapi.yml|json` files that allow comprehensive documentation + testing for the backend API services. 

- Thanks to the pre available `dynamic-ui-react`, this feature simply integrates `dynamicUI` component into one `.mdx` file and make it available on demand if the user decides to populate the `openapiURL` option when configuring the addon like so:

```js
// .storybook/main.js
module.exports = {
    addons: [
        {
            name: '@storybook-extras/dynamic',
            options: {
                openapiURL: 'https://petstore3.dynamic.io/api/v3/openapi.json'
            }
        }
    ]
}
```

## Roadmap
- Pass openapiURL as environment variable
- Support multiple openapiURLs

[img.node]:
https://img.shields.io/node/v/@storybook-extras/dynamic?logo=node.js&logoColor=white&labelColor=339933&color=grey&label=
[img.npm]:
https://img.shields.io/npm/v/@storybook-extras/dynamic?logo=npm&logoColor=white&labelColor=CB3837&color=grey&label=

[img.storybook]:
https://img.shields.io/npm/dependency-version/@storybook-extras/dynamic/dev/storybook?logo=storybook&logoColor=white&labelColor=FF4785&color=grey&label=

[img.banner]:
https://nodei.co/npm/@storybook-extras/dynamic.png

[link.npm]:
https://npmjs.org/package/@storybook-extras/dynamic