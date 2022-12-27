<div align="center">

<img src="logo.png" alt="logo" width=200 />


<h1>Storybook Angular Extras</h1>

Storybook addon that adds few features to the original Angular Storybook integration.

  
[![Release](https://img.shields.io/github/actions/workflow/status/sheriffMoose/storybook-ngx/release.yml?logo=github&label=release)](https://github.com/sheriffMoose/storybook-ngx/actions/workflows/release.yml)
[![License](https://img.shields.io/github/license/sheriffMoose/storybook-ngx?logo=github)](https://github.com/sheriffMoose/storybook-ngx/blob/main/LICENSE)

[![npm version](https://img.shields.io/npm/v/@sheriffmoose/storybook-ngx?logo=npm&logoColor=white&labelColor=CB3837&color=grey&label=)](https://npmjs.org/package/@sheriffmoose/storybook-ngx)
[![angular version](https://img.shields.io/npm/dependency-version/@sheriffmoose/storybook-ngx/dev/@angular/core?logo=angular&labelColor=DD0031&color=grey&label=)](https://npmjs.org/package/@sheriffmoose/storybook-ngx)
[![storybook version](https://img.shields.io/npm/dependency-version/@sheriffmoose/storybook-ngx/dev/storybook?logo=storybook&logoColor=white&labelColor=FF4785&color=grey&label=)](https://npmjs.org/package/@sheriffmoose/storybook-ngx)
[![typescript version](https://img.shields.io/npm/dependency-version/@sheriffmoose/storybook-ngx/dev/typescript?logo=typescript&logoColor=white&labelColor=3178C6&color=grey&label=)
](https://npmjs.org/package/@sheriffmoose/storybook-ngx)


[![NPM](https://nodei.co/npm/@sheriffmoose/storybook-ngx.png)](https://npmjs.org/package/@sheriffmoose/storybook-ngx)

</div>

<h2>Table of Contents</h2>

- [Getting started](#getting-started)
- [Features](#features)
  - [Test Runner Coverage Instrumentation](#test-runner-coverage-instrumentation)
  - [Angular Services Unit Testing](#angular-services-unit-testing)
  - [Documentation Lazy Loading](#documentation-lazy-loading)
  - [Console Logs](#console-logs)
  - [Wrappers Selector](#wrappers-selector)
    - [Configuration](#configuration)
- [Credits](#credits)
- [Roadmap](#roadmap)

## Getting started

1. Install the addon:

```js
yarn add @sheriffmoose/storybook-ngx -D
```

2. Add the addon into your main.js

```js
module.exports = {
    ...
    "addons": [
        "@sheriffmoose/storybook-ngx",
        ...
    ],
    ...
}
```

3. Refer to the sections below for the documentation of the built-in features.

## Features

-   ⚡️ Zero config setup
-   📚 Supports latest Storybook Implementation
-   📔 Coverage Instrumentation for Test-Runner
-   🧪 Auto injector for Angular services
-   🦥 Lazy loading documentation
-   💻 Console Logs Panel
-   🌯 Toolbar setup for Story Wrappers

### Test Runner Coverage Instrumentation

Credits to `JS Devtools` for their amazing [`coverage istanbul loader`](https://jstools.dev/coverage-istanbul-loader). This addon simply imports `@jsdevtools/coverage-istanbul-loader` into webpack configuration to enable the coverage instrumentation.

Read more about the coverage instrumentation in the official Test Runner documentation [here](https://github.com/storybookjs/test-runner#setting-up-code-coverage).

Simply running `test-storybook --coverage` will show you test results coverage in the terminal and also will save the coverage results into coverage/storybook.

### Angular Services Unit Testing

-   This feature is for developers who want their testing to all run in the same place.
-   Particulary this is helpful when you want to move business logic from components into services.
-   But you still want to test it through Storybook.
-   This feature does not require any setup. It relies on the official `@storybook/angular` implementation.
-   It simply injects the service into an `APP_INITIALIZER` which runs before the `Angular` application starts.
-   When the initializer runs, it puts the service instance into `parameters.providers` which you can retrieve in the play function like so:

```jsx
const meta: Meta = {
    title: 'Services/AppService',
    decorators: [
        moduleMetadata({
            imports: [AppModule, CommonModule],
            providers: [AppService],
        }),
    ]
};

export default meta;

export const Primary: StoryObj = {
    play: async ({ parameters: { providers } }) => {
        const appService: AppService = providers.AppService;

        expect(appService).toBeTruthy();
    },
};
```

### Documentation Lazy Loading

-   This feature uses `node-fetch` to load the `documentation.json` file during runtime, specifically in the preview iframe before the load of each story.
-   This is very helpful if you are doing active development and your documentation is being updated regularly.
-   This is also helpful if your application is already published along with its documentation and you need to load that remotely served documentation.

Here is a simple example of the first scenario:

-   execute compodoc into a specific directory
    ```
    compodoc -e json -d dist/docs
    ```
-   Make sure to include static dir into your `main.js` file like so

```jsx
module.exports = {
    staticDirs: [{ from: '../dist/docs', to: '/docs' }],
};
```

-   Next, enable the documentation lazy loading in the `preview.js` file like so:

```jsx
export const parameters = {
    ...
    docs: {
        inlineStories: true,
        ...
        lazyLoad: true,
        url: 'docs/documentation.json'
    }
}
```

The url property here can be a full url like `http://example.com/storybook/docs/documentation.json` or a relative path to the current storybook instance like `docs/documentation.json`.

Notice in the example above, we are serving the `dist/docs` directory as `http://localhost:6006/docs` and when the lazy loading happens it will retrieve `docs/documentation.json` from `http://localhost:6006/docs/documentation.json`

### Console Logs

-   This feature uses the `Actions` panel from `@storybook/addon-actions` to display the console output.
-   This is helpful if you need to focus on the console output of the application.
-   To enable the feature use the parameters in `preview.js` like so:

```jsx
export const parameters = {
    console: {
        enabled: true,
        patterns: [/^dev$/],
        omitFirst: true,
    },
};
```

Currently, the patterns property is used to match the first argument of the `console` methods `debug`, `log`, `info`, `warn`& `error`. This allows developers to use special context for their app logs. For example: `console.log('dev', data);` will be matched using the `/^dev$/` pattern, and will trigger an action that shows up in the `Actions` panel. You can use the `omitFirst` property to make sure the `dev` item does not show, only other arguments will show up.

### Wrappers Selector

-   This feature uses `componentWrapperDecorator` from the official `@storybook/angular` to render wrapper elements dynamically around stories.
-   This simply reads a list of pre-defined wrapper elements from the global parameters or each individual story parameters.
-   This allows you to change the wrapper element during runtime instead of having static decorator all the time.
-   This is very helpful specially if you want to see how your components render inside a root component with header and footer, or just simply inside a specific parent element.

#### Configuration

-   This toolbar menu works very similar to the official `@storybook/addon-backgrounds` addon.
-   The configuration looks something like this:

In `preview.js` or `preview.ts`:

```tsx
export const parameters = {
    wrappers: {
        enabled: true,
        default: 'None',
        values: [
            { name: 'None', value: '' },
            { name: 'Container', value: 'app-container' },
            { name: 'Root', value: 'app-root' },
        ],
    },
};
```

In a story file like `button.stories.ts`:

```tsx
import { type StoryObj, type Meta } from '@storybook/angular';
import Button from './button.component';

const meta: Meta<Button> = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        wrappers: {
            default: 'None',
            values: [
                { name: 'None', value: '' },
                {
                    name: 'Button Container',
                    value: 'btn-container',
                    options: {
                        class: 'small',
                        style: 'padding:5px;',
                    },
                },
                { name: 'Container', value: 'app-container' },
                { name: 'Root', value: 'app-root' },
            ],
        },
    },
};

export default meta;
```

The wrapper item can also contain an `options` property which will be translated into HTML attributes for the wrapper. For example; the configuration above will render the following if `Button Container` is selected:

```html
<btn-container class="small" style="padding:5px;"></btn-container>
```

## Credits

-   Thanks for `JS Devtools` for their amazing `coverage istanbul loader`.
-   Thanks for `@storybook/addon-backgrounds` for the inspiration.
-   This would not have been possible without the official `@storybook/angular` framework.
-   Thanks for the team behind the official `Storybook Addon Kit` for the amazing work they put into this kit that was very helpful for generating this addon.

## Roadmap

-   Add better filteration mechanism for the console logs.
-   Add new tab to display source code of components and their dependencies.
