<h1 align="center">@shaizei/babel-preset</h1>

<p align="center">This package contains shareable babel.js configuration used by the applications created with @shaizei/cli.</p>

## Getting Started

### 1. Installation

Using Yarn:

```shell
  yarn add @shaizei/babel-preset --dev
```

Using npm:

```shell
  npm install @shaizei/babel-preset --save-dev
```

### 2. Usage

* Create a new `.babelrc` file
* Add `@shaizei/babel-preset` as follows:

For JavaScript projects:

```javascript
  {
    "presets": "@shaizei/babel-preset"
  }
```

For TypeScript projects:

If you're using this preset in a TypeScript project and want Babel to transpile your TypeScript code, then pass the `typescript` option as follows:

```javascript
  {
    "presets": [
      "@shaizei/babel-preset",
      {
        typescript: true
      }
    ]
  }
```

For Emotion projects:

If you're using [Emotion](https://emotion.sh) and want to add support of Emotion's CSS prop, the pass the `emotion` option as follows:

```javascript
  {
    "presets": [
      "@shaizei/babel-preset",
      {
        emotion: true
      }
    ]
  }
```

## Override Default Config

If you want to override the default configuration, then extend `.babelrc` normally.

## Naming Convention

Note that you can also create `babel.config.js` instead of `.babelrc` file.
