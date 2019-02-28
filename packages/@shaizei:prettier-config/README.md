<h1 align="center">@shaizei/prettier-config</h1>

<p align="center">This package contains shareable Prettier configuration used by the applications created with @shaizei/cli.</p>

## Getting Started

### 1. Installation:

Using Yarn:

```shell
  yarn add @shaizei/prettier-config --dev
```

Using npm:

```shell
  npm install @shaizei/prettier-config --save-dev
```

### 2. Usage:

* Create a new file and name it as `prettier.config.js`
* Just import `@shaizei/prettier-config` and export it.

```javascript
module.exports = require('@shaizei/prettier-config');
```

* In order to have a `.prettierignore` file as well, just run the following command from terminal:

```sh
  cat ./node_modules/@shaizei/prettier-config/.prettierignore >> .prettierignore
```
## Override Default Config

If you want to override the default configuration, then add the following code in `prettier.config.js` file:

```javascript
  const prettierConfig = require('@shaizei/prettier-config');
  module.exports = {
    ...prettierConfig,
    // your config options goes here, e.g. printWidth: 80
  }
```
