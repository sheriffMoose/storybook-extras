<div align="center">

<img src="https://github.com/storybook-extras/blob/master/logos/console.png?raw=true" alt="logo" width="200" />

<h1>Storybook Console Logs</h1>

<p>Storybook addon for displaying console logs in `Actions` panel.</p>

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
yarn add @storybook-extras/console -D
```

1. Add the addon

```js
// .storybook/main.js
module.exports = {
    ...
    "addons": [
        "@storybook-extras/console",
        ...
    ],
    ...
}
```

## How to use

-   This addon uses the `Actions` panel from `@storybook/addon-actions` to display the console output.
-   This is helpful if you need to focus on the console output of the application.
-   To enable the addon, you need to add the `console` property to the `parameters` object in the `preview.js` file.

```jsx
// .storybook/preview.js
export const parameters = {
    console: {
        disable: false,
        patterns: [/^dev$/],
        omitFirst: true,
    },
};
```

Currently, the patterns property is used to match the first argument of the `console` methods `debug`, `log`, `info`, `warn`& `error`. This allows developers to use special context for their app logs. For example: `console.log('dev', data);` will be matched using the `/^dev$/` pattern, and will trigger an action that shows up in the `Actions` panel. You can use the `omitFirst` property to make sure the `dev` item does not show, only other arguments will show up.




[img.node]:
https://img.shields.io/node/v/@storybook-extras/console?logo=node.js&logoColor=white&labelColor=339933&color=grey&label=
[img.npm]:
https://img.shields.io/npm/v/@storybook-extras/console?logo=npm&logoColor=white&labelColor=CB3837&color=grey&label=

[img.storybook]:
https://img.shields.io/npm/dependency-version/@storybook-extras/console/dev/storybook?logo=storybook&logoColor=white&labelColor=FF4785&color=grey&label=

[img.banner]:
https://nodei.co/npm/@storybook-extras/console.png

[link.npm]:
https://npmjs.org/package/@storybook-extras/console