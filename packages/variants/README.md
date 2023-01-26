<div align="center">

<img src="https://raw.githubusercontent.com/sheriffMoose/storybook-extras/master/logos/variants.svg" alt="logo" width="200" />

<h1>Story Variants</h1>

<p>Storybook addon for displaying component variants all together in one story.</p>

![][img.node]
![][img.npm]
[![][img.storybook]][link.npm]

[![][img.banner]][link.npm]

</div>

<h2>Table of Contents</h2>

- [Getting started](#getting-started)
- [How to use](#how-to-use)
  - [Parameters](#parameters)

## Getting started

1. Install the addon:

```js
yarn add @storybook-extras/variants -D
```

1. Add the addon

```js
// .storybook/main.js
module.exports = {
    ...
    "addons": [
        "@storybook-extras/variants",
        // it will be included automatically if you are using
        // "@storybook-extras/preset",
        ...
    ],
    ...
}
```

## How to use

- Simply enable the variants through the toolbar or using the parameters like so:

```jsx
// .storybook/preview.js OR button.stories.ts
parameters: {
    variants: {
        enable: true
    },
};
```


### Parameters

| Name | Type | Default | Description | Notes |
| --- | --- | --- | --- |  --- |
| `enable` | `boolean` | `false` | Enable the variants addon | If set to `false`, the toolbar button will be hidden and the addon will be disabled completely |
| `include` | `string[]` | `[]` | Include variants from the list | Only variants in this list will be displayed, all other options except `groupBy` will be ignored |
| `exclude` | `string[]` | `[]` | Exclude variants from the list | |
| `groupBy` | `string[]` | `[]` | Group the variants by these keys | |
| `autoCalculate` | `boolean` | `false` | Automatically calculate the variants | If set to `true`, the toolbar button will be of no use <br> // TODO: Remove the button if autoCalculate is set to `true` |




[img.node]:
https://img.shields.io/node/v/@storybook-extras/variants?logo=node.js&logoColor=white&labelColor=339933&color=grey&label=
[img.npm]:
https://img.shields.io/npm/v/@storybook-extras/variants?logo=npm&logoColor=white&labelColor=CB3837&color=grey&label=

[img.storybook]:
https://img.shields.io/npm/dependency-version/@storybook-extras/variants/dev/storybook?logo=storybook&logoColor=white&labelColor=FF4785&color=grey&label=

[img.banner]:
https://nodei.co/npm/@storybook-extras/variants.png

[link.npm]:
https://npmjs.org/package/@storybook-extras/variants