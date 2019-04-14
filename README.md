<h1 align="center">shaizei</h1>

<p align="center">🛠 — Toolkit for building & maintaining futuristic React apps.
</p>

<p align="center">
  <a href="#contributors"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square" alt="all-contributors"></a>
  <a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcomed"></a>
  <a href="https://github.com/shahzaibkhalid/shaizei/blob/master/LICENSE.md"><img src="https://img.shields.io/npm/l/@shaizei/cli.svg?style=flat-square" alt="MIT License"></a>
  <a href="https://www.npmjs.com/package/@shaizei/cli"><img src="https://img.shields.io/npm/v/@shaizei/cli.svg" alt="Version"></a>
</p>

# STOP! 🚧 ✋

This software is still in beta stages and not ready for production use just yet. Please try it out, give feedback, and help fix bugs.

# About

This repo contains several packages to develop and build scalable React.js apps.

* [@shaizei/babel-preset](./packages/babel-preset/README.md) - This package contains shareable babel.js configuration used by the applications created with @shaizei/cli.

* [@shaizei/cli](./packages/cli/README.md) - A next-generation CLI to quickly scaffold pre-configured yet on-demand configurable React applications.

* [@shaizei/eslint-config](./packages/eslint-config/README.md) - This repository contains shareable ESLint configuration used by the applications created with @shaizei/cli.

* [@shaizei/prettier-config](./packages/prettier-config/README.md) - This repository contains shareable Prettier configuration used by the applications created with @shaizei/cli.

* [@shaizei/scripts](./packages/scripts/README.md) - This package contains automation task used by the applications created with @shaizei/cli.

* [@shaizei/typescript-config](./packages/typescript-config/README.md) - This package contains shareable TypeScript compiler configuration used by the applications created with @shaizei/cli.

* [@shaizei/webpack-config](./packages/webpack-config/README.md) - This package contains shareable webpack configuration used by the applications created with @shaizei/cli.

* [@shaizei/helpers](./packages/helpers/README.md) - This package contains common helper utilities for `shaizei` core.

# Getting Started

## Installation

The first step is to install `@shaizei/cli` to quickly scaffold an application.

Using Yarn:

```shell
yarn global add @shaizei/cli
```

Using npm:

```shell
npm install @shaizei/cli -g
```

## Scaffolding a new App

### React-JavaScript

In order to generate a React-JavaScript app, named as `my-demo-app`, run the following command:

```shell
shaizei new my-demo-app
```

If you want to look into the application that will be created by this command, take a look at [shaizei-starter-javascript](https://github.com/shahzaibkhalid/shaizei-starter-javascript).

### React-TypeScript

In order to generate a React-TypeScript app, named as `my-demo-app`, run the following command:

```shell
shaizei new my-demo-app --typescript
```

If you want to look into the application that will be created by this command, take a look at [shaizei-starter-typescript](https://github.com/shahzaibkhalid/shaizei-starter-typescript).

This will generate a new application for you in current directory.

## Configuration Options

Apps created with `@shaizei/cli` are built with sensible defaults yet very extensible at the core.

### shaizeirc.json

In order to configure certain behavior of development workflow, you can play with the options in `shaizeirc.json`. Here's how the file looks like in a newly scaffolded app:

```json
  {
    "typescript": false,
    "showErrorOverly": true,
    "emitLintingErrors": false,
    "host": "localhost",
    "defaultPort": 3000,
    "https": false,
    "addCSSSourceMaps": true,
    "addJSSourceMaps": true,
    "cssModules": false,
    "webpackDevSourceMap": "cheap-module-source-map",
    "webpackProdSourceMap": "source-map",
    "typeCheck": false,
    "emotion": false,
    "title": "React App | Shaizei"
  }
```

Please find the details of each property along with default value as follows:

- **typescript** (boolean: `false`)  
Set this flag to `true` if you want to support `.ts` or `.tsx` files.

- **showErrorOverly** (boolean: `true`)  
You'll see webpack error overlay for errors of various kinds to ease the development workflow. Turn this flag to `false` to get out of this default behavior.

- **emitLintingErrors** (boolean: `false`)  
By default, linting errors won't break the incremental development builds, but if you want the `webpack-dev-server` to fail the build in case of any linting error, (in order to get more quick linting feedback) turn this flag to `true`.

- **host** (string: `localhost`)  
Modify this flag to change the default `localhost`.

- **defaultPort** (number: `3000`)  
You can modify the default port by modifying this option. Note that if the mentioned port is already busy, dev server will be started on a different port.

- **https** (boolean: `false`)  
You can change this option to `true` in order to run the development server with HTTPS.

- **addCSSSourceMaps** (boolean: `true`)  
By default, source maps will be generated for CSS files within production build, If you want to opt-out of this behavior, turn this flag to `false`.

- **addJSSourceMaps** (boolean: `true`)  
By default, source maps will be generated for JavaScript files within production build, If you want to opt-out of this behavior, turn this flag to `false`.

- **cssModules** (boolean: `false`)  
By default, CSS Modules are not enabled, but you can enable by turning this flag to `true`.

- **webpackDevSourceMap** (string: `cheap-module-source-map`)
By default, `cheap-module-source-map` will be used as webpack-dev-server `devtool`. But you can add any other option, valid for webpack `devtool` option.

- **webpackProdSourceMap** (string: `source-map`)
By default, `source-map` will be used as a `devtool` for production bundle source maps. But you can add any other option, valid for webpack `devtool` option.

- **typeCheck** (boolean: `false`)  
As `shaizei` uses Babel to convert TypeScript to JavaScript, so Babel just strips away types without any type-checking. This usually results in faster incremental builds but takes away the important aspect of TypeScript, type-checking. And the only way left is that you can check the soundness of types via your IDE intellisense features. This is not helpful always. There are two ways to type-check your TypeScript code in `shaizei`.
  * You can turn on `typeCheck` flag in `shaizeirc.json` by turning its value to `true`. This will use `fork-ts-checker-webpack-plugin` for type-checking in every compilation. Note that this is only available when `typescript` flag value is `true` and won't do anything for JavaScript-React projects. This might leads to slower incremental builds.

  * Second option is to run the type-checking script that's exposed by `shaizei`. You can run it as follows:

    ```shell
    shaizei type-check
    ```

    This will type-check your TypeScript code and will report the errors on terminal output (if any).
    Note that `typescript` options must be `true` in order to run `type-check` script.

- **emotion** (boolean: `false`)  
In order to add support for [emotion](https://emotion.sh) (a CSS-In-JS library) turn this flag to `true`.
  * Only tooling for Emotion is pre-configured, you must add the production dependencies like `@emotion/core` and `@emotion/styled` as per need.
  * If you're using TypeScript, you should also add `@emotion/core` inside the `types` array in `tsconfig.json`.

- **title** (string: `React App | Shaizei`)  
Change this option to change the document title.

### Configuring other tools

You can also configure other tools in development and production builds pipelines. Click on each of the below mentioned tools to learn more about configuration options available.

* [webpack](./packages/webpack-config/README.md)
* [babel](./packages/babel-preset/README.md)
* [ESLint](./packages/eslint-config/README.md)
* [Prettier](./packages/prettier-config/README.md)
* [TypeScript](./packages/typescript-config/README.md)

### Hot Module Replacement  

Hot Module Replacement is already setup using `react-hot-loader`. However, if you want to turn back to normal behavior of full-blown page refresh whenever you make any change. You've to make a small change in the codebase:

`src/App.tsx` or `src/App.jsx`

```javascript
// export default hot(App);
export default App;
```

Note that you might also need to restart your development server after such a change.

## Opinions

Although, apps created with `@shaizei/cli` does include sensible defaults when it comes to configurations. But at its heart, every tool is super configurable. Check more about configuring individual tools in pipelines in [Configuring other tools](#configuring-other-tools) section.

There are some opinions, however:

* `shaizeirc.json` file must exist at the root of project directory.
* Application-specific code must live within `src` directory.
* `src` directory must live at the root of project directory.
* The starting point of JavaScript-React project must be `index.jsx` and it must live at the root of `src` directory.
* The starting point of TypeScript-React project must be `index.tsx` and it must live at the root of `src` directory.
* The only HTML file `index.html` in which React  app will be rendered, must live at the root of `src` directory.
* There must be an `assets` directory at the root of `src` and app favicon (notably `favicon.ico`) must live at the root of `assets` directory.

Note that the apps scaffolded with `@shaizei/cli` already follow the opinions described above. However, these rules will be validated every time you run a standard `@shaizei/cli` command and if you try to violate them, you'll be prompted about what you're doing wrong and what you should do to fix.

## Contributing

Please take a look at [CONTRIBUTING.md](.github/CONTRIBUTING.md) for more information on how you can contribute to this project.

## Inspiration

There exists many other React CLIs, why another one? 🤔

* **Maintainable configurations**  
Instead of having the configurations per project basis, I wanted to move my configurations to a centralize location (separate packages) so that I can maintain it properly. Instead of having 100 different configurations inside 100 different projects, if I fix one thing in my configuration, I'd just release a new version and then update my package in all those projects.

* **Cleaner codebase**  
I don't know about you, but I strictly don't like bloated `package.json` with plenty of `devDependencies` that are directly related to configurations and not to your actual application. Also, having long `scripts` in `package.json` bloats your application that I personally wanted to clean out with `shaizei`.

* **Extensible configurations with sensible defaults**  
We can abstract away our configurations into separate packages with sensible defaults but then how can we extend those configurations? This has been my main goal while building `shaizei` that all tooling must be abstracted yet it must be very extensible at the core. Therefore, all the common tools are configurable. Please checkout [Configuring other tools](#configuring-other-tools) for more information.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://www.shahzaibkhalid.com"><img src="https://avatars3.githubusercontent.com/u/18225515?v=4" width="100px;" alt="Shahzaib Khalid"/><br /><sub><b>Shahzaib Khalid</b></sub></a><br /><a href="#question-shahzaibkhalid" title="Answering Questions">💬</a> <a href="https://github.com/shahzaibkhalid/shaizei/issues?q=author%3Ashahzaibkhalid" title="Bug reports">🐛</a> <a href="https://github.com/shahzaibkhalid/shaizei/commits?author=shahzaibkhalid" title="Code">💻</a> <a href="#design-shahzaibkhalid" title="Design">🎨</a> <a href="https://github.com/shahzaibkhalid/shaizei/commits?author=shahzaibkhalid" title="Documentation">📖</a> <a href="#example-shahzaibkhalid" title="Examples">💡</a> <a href="#fundingFinding-shahzaibkhalid" title="Funding Finding">🔍</a> <a href="#ideas-shahzaibkhalid" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-shahzaibkhalid" title="Maintenance">🚧</a> <a href="#projectManagement-shahzaibkhalid" title="Project Management">📆</a> <a href="#review-shahzaibkhalid" title="Reviewed Pull Requests">👀</a> <a href="#tool-shahzaibkhalid" title="Tools">🔧</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

`shaizei` is released under the [MIT License](./LICENSE.md).
