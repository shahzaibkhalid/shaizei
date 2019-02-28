<h1 align="center">@shaizei/eslint-config</h1>

<p align="center">This package contains shareable ESLint configuration used by the applications created with @shaizei/cli.</p>

## Getting Started

### 1. Installation:

Using Yarn:

```shell
  yarn add @shaizei/eslint-config --dev
```

Using npm:

```shell
  npm install @shaizei/eslint-config --save-dev
```

### 2. Usage:

* Create a new file and name it as `.eslintrc.js`
* Import relevant config file from `@shaizei/eslint-config` and just export it as follows.

For JavaScript projects:

```javascript
module.exports = require('@shaizei/eslint-config').javascriptReact;
```

For TypeScript projects:

```javascript
module.exports = require('@shaizei/eslint-config').typescriptReact;
```

* In order to have a `.eslintignore` file as well, just run the following command from terminal:

```sh
  cat ./node_modules/@shaizei/eslint-config/.eslintignore >> .eslintignore
```
## Override Default Config

If you want to override the default configuration, then add the following code in `.eslintrc.js` file:

```javascript
  const ESLintConfig = require('@shaizei/eslint-config');
  module.exports = {
    ...ESLintConfig,
    // your config options goes here, e.g. plugins: [...]
  }
```

## VSCode ESLint Extension Setup

As we're not installing ESLint locally per project, but leveraging ESLint and associated packages installed in `@shaizei/eslint-config` project. Thus, we need to inform VSCode ESLint extension that how to resolve ESLint.

* Go to `settings.json` in VSCode.

* Add following settings:

```json
  "eslint.nodePath": "./node_modules/@shaizei/eslint-config/node_modules"
```

Above mentioned settings will let the extension read ESLint from `@shaizei/eslint-config`.

Also, for TypeScript, we need to tell ESLint extension to lint `.ts` and `.tsx` files as well. We recommend to add following setting as well in `settings.json`:

```json
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
```
