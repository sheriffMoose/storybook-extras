<div align="center">

<img src="https://raw.githubusercontent.com/sheriffMoose/storybook-extras/master/logos/swagger.svg" alt="logo" width="200" />

<h1>Storybook Swagger UI</h1>

<p>Storybook addon for displaying story for Swagger UI for backend APIs documentation & testing.</p>

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

```shell
yarn add @storybook-extras/swagger -D
```

1. Add the addon

```ts
// .storybook/main.ts
import { StorybookConfig } from '@storybook/angular';
import { ExtrasConfig } from '@storybook-extras/preset';

const config: StorybookConfig & ExtrasConfig = {
    ...
    "addons": [
        "@storybook-extras/swagger",
        ...
    ],
    ...
}

export default config;
```

## How to use

- OpenAPI (formly Swagger) is a popular specification for the management of RESTful APIs. Usually OpenAPI produces a `openapi.yml` or `openapi.json` file that can be used to integrate/visualize the APIs configured on the backend server.

- `Swagger UI` is a popular framework for the visualization of the `openapi.yml|json` files that allow comprehensive documentation + testing for the backend API services. 

- Thanks to the pre available `swagger-ui-react`, this feature simply integrates `SwaggerUI` component into one `.mdx` file and make it available on demand if the user decides to populate the `url` option when configuring the addon like so:

**EXPERIMENTAL FEATURE**
For the current time being, the `stories` property is working with only one item. We are working on this feature to allow multiple endpoints and hopefully more configuration items in the near future releases.


```ts
// .storybook/main.ts
import { StorybookConfig } from '@storybook/angular';
import { ExtrasConfig } from '@storybook-extras/preset';

const config: StorybookConfig & ExtrasConfig = {
    addons: [
        {
            name: '@storybook-extras/swagger',
            options: {
                stories: [
                    {
                        title: 'Swagger UI',
                        url: 'https://petstore3.swagger.io/api/v3/openapi.json',
                    },
                ],
            }
        }
    ]
}

export default config;
```

[img.node]:
https://img.shields.io/node/v/@storybook-extras/swagger?logo=node.js&logoColor=white&labelColor=339933&color=grey&label=
[img.npm]:
https://img.shields.io/npm/v/@storybook-extras/swagger?logo=npm&logoColor=white&labelColor=CB3837&color=grey&label=

[img.storybook]:
https://img.shields.io/npm/dependency-version/@storybook-extras/swagger/dev/storybook?logo=storybook&logoColor=white&labelColor=FF4785&color=grey&label=

[img.banner]:
https://nodei.co/npm/@storybook-extras/swagger.png

[link.npm]:
https://npmjs.org/package/@storybook-extras/swagger