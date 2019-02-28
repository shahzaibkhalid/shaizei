<h1 align="center">@shaizei/typescript-config</h1>

<p>This package contains shareable TypeScript compiler configuration used by the applications created with @shaizei/cli.</p>

## Getting Started

### 1. Installation:

Using Yarn:

```sh
  yarn add @shaizei/typescript-config typescript --dev
```

Using npm:

```sh
  npm install @shaizei/typescript-config typescript --save-dev
```


### 2. Usage:

* Create a new `tsconfig.js` at the root directory of your project.
* Extend the config from `@shaizei/typescript-config`

```json
{
  "extends": "@shaizei/typescript-config",
}
```

And that's it.

## Override Default Config

If you want to override some of the pre-defined configuration, then simply write them down after extending from `@shaizei/typescript-config`.

```json
{
  "extends": "@shaizei/typescript-config",
  "compilerOptions": {
    ...
  },
  "exclude": [...],
  "include": [...]
}
```
