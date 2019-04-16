<h1 align="center">@shaizei/scripts</h1>

<p align="center">This package contains automation task used by the applications created with @shaizei/cli.</p>

## Task Scripts

Here's a brief list of all tasks scripts that are offered by this package:

* **develop**  
It will start the development server using `webpack-dev-server` and configurations exposed by `@shaizei/webpack-config`.

* **build**  
It will prepare an optimized production build of your application and will create a new `build` directory.

* **lint**  
It will run linter against files having following extensions and existing is `src`.
  * jsx
  * tsx
  * js
  * ts

* **lint-fix**  
It will try to fix common fixable issues reported by linter.

* **analyze**  
It will analyze the production bundle by using `webpack-bundle-analyzer`.

* **serve**  
It will serve the production bundle locally (instead of serving the app from `src`).

* **prettier**  
It will run Prettier throughout your codebase and will print wherever Prettier rules have been violated.

* **prettier-fix**  
It will fix Prettier formatting issues that were reported by `prettier` command.

* **eslint-prettier-integration**  
It will check and warn if ESLint and Prettier have any contradicting rules.

* **type-check**  
It will type-check the TypeScript code and log results to the console. (in case the project is React-TypeScript)

## Running Task Scripts

You need to install `@shaizei/cli` in order to run the above mentioned scripts. Take a look at [@shaizei/cli](https://www.npmjs.com/package/@shaizei/cli) to learn more on how to install it. Apps created with `@shaizei/cli` comes pre-configured with these scripts.

After installing the CLI, every time you're going to run any of the above mentioned scripts, you need to run them with `@shaizei/cli` e.g. `develop` needs to be run as `shaizei develop` and same is true for other scripts as well.


