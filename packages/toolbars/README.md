<div align="center">

<img src="https://raw.githubusercontent.com/sheriffMoose/storybook-extras/master/logos/toolbars.svg" alt="logo" width="200" />

<h1>Toolbar Buttons</h1>

<p>Storybook addon for adding custom toolbar buttons.</p>

![][img.node]
![][img.npm]
[![][img.storybook]][link.npm]

[![][img.banner]][link.npm]

</div>

<h2>Table of Contents</h2>

- [Getting started](#getting-started)
- [How to use](#how-to-use)

## Getting started

1. Install the addon:

```js
yarn add @storybook-extras/toolbars -D
```

1. Add the addon

```js
// .storybook/main.js
module.exports = {
    ...
    "addons": [
        "@storybook-extras/toolbars",
        // it will be included automatically if you are using
        // "@storybook-extras/preset",
        ...
    ],
    ...
}
```

## How to use

- Simply enable the toolbars through the toolbar or using the parameters like so:

```jsx
// .storybook/preview.js OR button.stories.ts
parameters: {
    toolbars: [
        {
            key:'myToolbar',
            title:'My Toolbar',
            icon:'globe',
            // OR emoji: '🌍',
        },
    ],
};
```




[img.node]:
https://img.shields.io/node/v/@storybook-extras/toolbars?logo=node.js&logoColor=white&labelColor=339933&color=grey&label=
[img.npm]:
https://img.shields.io/npm/v/@storybook-extras/toolbars?logo=npm&logoColor=white&labelColor=CB3837&color=grey&label=

[img.storybook]:
https://img.shields.io/npm/dependency-version/@storybook-extras/toolbars/dev/storybook?logo=storybook&logoColor=white&labelColor=FF4785&color=grey&label=

[img.banner]:
https://nodei.co/npm/@storybook-extras/toolbars.png

[link.npm]:
https://npmjs.org/package/@storybook-extras/toolbars