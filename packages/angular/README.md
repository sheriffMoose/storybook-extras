<div align="center">

<img src="https://raw.githubusercontent.com/sheriffMoose/storybook-extras/master/logos/angular.svg" alt="logo" width="200" />

<h1>Storybook Angular Extras</h1>

<p>Storybook addon that adds few features to the original Angular Storybook integration.</p>

[![][img.release]][link.release]
[![][img.license]][link.license]

![][img.node]
![][img.npm]
![][img.downloads]

[![][img.angular]][link.npm]
[![][img.storybook]][link.npm]
[![][img.typescript]][link.npm]

[![][img.health]][link.snyk]

[![][img.banner]][link.npm]

</div>

<h2>Table of Contents</h2>

- [Getting started](#getting-started)
- [Demo/Chromatic](#demochromatic)
- [Features](#features)
  - [Test Runner Coverage Instrumentation](#test-runner-coverage-instrumentation)
  - [Angular Services Unit Testing](#angular-services-unit-testing)
  - [Documentation Lazy Loading](#documentation-lazy-loading)
  - [Source Code](#source-code)
  - [Wrappers Selector](#wrappers-selector)
- [Roadmap](#roadmap)

## Getting started

1. Install the addon:

```shell
yarn add @storybook-extras/angular -D
```

1. Add the addon

```ts
// .storybook/main.ts
import { StorybookConfig } from '@storybook/angular';
import { ExtrasConfig } from '@storybook-extras/preset';

const config: StorybookConfig & ExtrasConfig = {
    ...
    "addons": [
        "@storybook-extras/angular",
        ...
    ],
    ...
}

export default config;
```

3. Refer to the sections below for the documentation of the built-in features.

## Demo/Chromatic

Find the published demo storybook on chromatic [here](https://master--63c1a45beed1a8f036a44e28.chromatic.com/)

## Features

-   ⚡️ Zero config setup.
-   📚 Supports latest Storybook v7.
-   🅰️ Supports latest Angular v15.
-   🙌 Introduce `must-have` features for `Storybook` on `Angular` .
-   🐈‍ Integrate as much `nice-to-have` features as possible.
-   📔 Coverage Instrumentation for Test-Runner
-   🧪 Auto injector for Angular services
-   🦥 Lazy loading documentation
-   💬 Source code display
-   🌯 Story Wrappers selector toolbar

### Test Runner Coverage Instrumentation

We've recently moved from `@jsdevtools/coverage-istanbul-loader` to one of our own created libraries `webpack-plugin-istanbul` to ensue it is working better with the latest versions of `Storybook` and `Angular` and specifically with the proper versions of `webpack` and `istanbul-lib-instrument`.

Read more about the coverage instrumentation in the official Test Runner documentation [here](https://github.com/storybookjs/test-runner#setting-up-code-coverage).

Simply running `test-storybook --coverage` will show you test results coverage in the terminal and also will save the coverage results into coverage/storybook.

### Angular Services Unit Testing

-   This feature is for developers who want their testing to all run in the same place.
-   Particulary this is helpful when you want to move business logic from components into services.
-   But you still want to test it through Storybook.
-   This feature does not require any setup. It relies on the official `@storybook/angular` implementation.
-   It simply injects the service into an `APP_INITIALIZER` which runs before the `Angular` application starts.
-   When the initializer runs, it puts the service instance into `parameters.providers` which you can retrieve in the play function like so:

```ts
const meta: Meta = {
    title: 'Services/AppService',
    decorators: [
        moduleMetadata({
            imports: [AppModule, CommonModule],
            providers: [AppService],
        }),
    ],
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

-   This feature uses `fetch` to load the `documentation.json` file during runtime, specifically in the preview iframe before the load of each story.
-   This is very helpful if you are doing active development and your documentation is being updated regularly.
-   This is also helpful if your application is already published along with its documentation and you need to load that remotely served documentation.

Here is a simple example of the first scenario:

-   execute compodoc into a specific directory
    ```
    compodoc -e json -d dist/docs
    ```
-   Make sure to include static dir like so

```ts
// .storybook/main.ts
import { StorybookConfig } from '@storybook/angular';
import { ExtrasConfig } from '@storybook-extras/preset';

const config: StorybookConfig & ExtrasConfig = {
    staticDirs: [{ from: '<DOCS_DIR_PATH>', to: '/<DOCS_SERVE_DIR>' }],
}

export default config;
```

-   Next, enable the documentation lazy loading in the `preview.@(js|ts)` file like so:

```ts
export const parameters = {
    ...
    docs: {
        inlineStories: true,
        ...
        fetch: '<DOCS_SERVE_DIR>/documentation.json'
    }
}
```

The url property here can be a full url like `http://example.com/storybook/docs/documentation.json` or a relative path to the current storybook instance like `../dist/docs/documentation.json`.

You can also provide `compodoc` property to be something like `require('<DOCS_DIR_PATH>/documentation.json')` or have it imported already with `import compodoc from '<DOCS_DIR_PATH>/documentation.json`, this way you don't need to call `setCompodocJson` method, it will be called automatically on your behalf, and the docs will be stored in memory for later usage.

### Source Code

-   This feature relies on the documentation loaded previously from `compodoc` to display the source code of the components and/or services that exists in the `moduleMetadata`.
-   You don't need to re-declare your main component in the `declarations` section of `moduleMetadata`, it will be added directly.
-   Basically, the addon will retrieve the source code of any class under `declarations` or `providers`, along with templates & styles for the components if they exist.
-   No setup is needed for this feature, it is enabled by default.
-   You can disable it by using global or story parameters like so:
    ```ts
    parameters: {
        sourceCode: {
            disable: true;
        }
    }
    ```

### Wrappers Selector

-   This feature uses `componentWrapperDecorator` from the official `@storybook/angular` to render wrapper elements dynamically around stories.
-   This simply reads a list of pre-defined wrapper elements from the global parameters or each individual story parameters.
-   This allows you to change the wrapper element during runtime instead of having static decorator all the time.
-   This is very helpful specially if you want to see how your components render inside a root component with header and footer, or just simply inside a specific parent element.

**Configuration**

-   This toolbar menu works very similar to the official `@storybook/addon-backgrounds` addon.
-   The configuration looks something like this:

In `preview.js` or `preview.ts`:

```ts
export const parameters = {
    wrappers: {
        disable: false,
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

```ts
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

## Roadmap

Please feel free to request features, I will try to add them as soon as humanly possible. Currently the following features are in my pipeline:

-   UI representation of Angular Service.
-   UI representation for Issues/Pull Requests (Github/Bitbucket/Jira).
-   Coverage Enhancements.
-   Story Source representation.

[img.release]: https://img.shields.io/github/actions/workflow/status/sheriffMoose/storybook-extras/release.yml?logo=github&label=release
[img.license]: https://img.shields.io/github/license/sheriffMoose/storybook-extras?logo=github
[img.node]: https://img.shields.io/node/v/@storybook-extras/angular?logo=node.js&logoColor=white&labelColor=339933&color=grey&label=
[img.npm]: https://img.shields.io/npm/v/@storybook-extras/angular?logo=npm&logoColor=white&labelColor=CB3837&color=grey&label=
[img.downloads]: https://img.shields.io/npm/dt/@storybook-extras/angular?logo=docusign&logoColor=white&labelColor=purple&color=grey&label=
[img.angular]: https://img.shields.io/npm/dependency-version/@storybook-extras/angular/dev/@angular/core?logo=angular&labelColor=DD0031&color=grey&label=
[img.storybook]: https://img.shields.io/npm/dependency-version/@storybook-extras/angular/dev/storybook?logo=storybook&logoColor=white&labelColor=FF4785&color=grey&label=
[img.typescript]: https://img.shields.io/npm/dependency-version/@storybook-extras/angular/dev/typescript?logo=typescript&logoColor=white&labelColor=3178C6&color=grey&label=
[img.health]: https://snyk.io/advisor/npm-package/@storybook-extras/angular/badge.svg
[img.banner]: https://nodei.co/npm/@storybook-extras/angular.png
[link.release]: https://github.com/sheriffMoose/storybook-extras/actions/workflows/release.yml
[link.license]: https://github.com/sheriffMoose/storybook-extras/blob/master/LICENSE
[link.npm]: https://npmjs.org/package/@storybook-extras/angular
[link.snyk]: https://snyk.io/advisor/npm-package/@storybook-extras/angular
