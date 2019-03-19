<h1 align="center">@shaizei/webpack-config</h1>

<p>This package contains shareable webpack configuration used by the applications created with @shaizei/cli.</p>

## Getting Started

### 1. Installation

Using Yarn:

```sh
  yarn add @shaizei/webpack-config webpack webpack-dev-server webpack-cli --dev
```

Using npm:

```sh
  npm install @shaizei/webpack-config webpack webpack-dev-server webpack-cli --save-dev
```

### 2. Usage

* Create a new `webpack.config.js` at the root directory of your project.
* Import the config function from `@shaizei/webpack-config` package.

```js
  const WebpackConfig = require('@shaizei/webpack-config');
```

* Then, we just need to export the configurations.

```js
  module.exports = WebpackConfig();
```

## Override Default Config

If you want to override some of the pre-defined configuration, then simply pass a JavaScript object into `WebpackConfig` as follows:

```js
module.exports = WebpackConfig({
  plugins: [...]
});
```
