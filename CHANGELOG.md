## v0.1.0-beta.7 (2019-04-13)

#### :rocket: New Feature
* `typescript-config`
  * [#40](https://github.com/shahzaibkhalid/shaizei/pull/40) Add support for incremental TS compilation. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
* `prettier-config`
  * [#38](https://github.com/shahzaibkhalid/shaizei/pull/38) Add new `quote-props` option to Prettier config. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
* `webpack-config`
  * [#37](https://github.com/shahzaibkhalid/shaizei/pull/37) Implement `fork-ts-checker-webpack-plugin`. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
* `cli`
  * [#36](https://github.com/shahzaibkhalid/shaizei/pull/36) Expose `type-check` option from CLI. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
* `scripts`
  * [#35](https://github.com/shahzaibkhalid/shaizei/pull/35) Add `type-check` script for TS projects. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))

#### :bug: Bug Fix
* `webpack-config`
  * [#32](https://github.com/shahzaibkhalid/shaizei/pull/32) Removed `watchContentBase` from devServer. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))

#### :nail_care: Enhancement
* `eslint-config`, `prettier-config`
  * [#39](https://github.com/shahzaibkhalid/shaizei/pull/39) Updating Prettier version to 1.17.0 ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
* `webpack-config`
  * [#34](https://github.com/shahzaibkhalid/shaizei/pull/34) Update message log for default port unavailability. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
  * [#33](https://github.com/shahzaibkhalid/shaizei/pull/33) Remove `ts-loader` completely. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))

#### :house: Internal
* `babel-preset`
  * [#41](https://github.com/shahzaibkhalid/shaizei/pull/41) Refactored babel-preset codebase. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))

#### Committers: 1
- Shahzaib Khalid ([@shahzaibkhalid](https://github.com/shahzaibkhalid))

## v0.1.0-beta.6 (2019-04-10)

#### :rocket: New Feature
* `babel-preset`
  * [#30](https://github.com/shahzaibkhalid/shaizei/pull/30) Add direct support of `typescript` and `emotion`. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
* `eslint-config`
  * [#28](https://github.com/shahzaibkhalid/shaizei/pull/28) Ignore linting for `*.d.ts` files. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
* `typescript-config`
  * [#27](https://github.com/shahzaibkhalid/shaizei/pull/27) Add support for media files (images etc.) ([@shahzaibkhalid](https://github.com/shahzaibkhalid))

#### :nail_care: Enhancement
* `typescript-config`
  * [#31](https://github.com/shahzaibkhalid/shaizei/pull/31) Remove types from base `tsconfig.json`. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
* `webpack-config`
  * [#29](https://github.com/shahzaibkhalid/shaizei/pull/29) Remove `ts-loader` from TS build pipeline. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))

#### Committers: 1
- Shahzaib Khalid ([@shahzaibkhalid](https://github.com/shahzaibkhalid))

## v0.1.0-beta.5 (2019-04-05)

#### :rocket: New Feature
* `webpack-config`
  * [#24](https://github.com/shahzaibkhalid/shaizei/pull/24) Add separate CSS and JS source-map options. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
* `eslint-config`
  * [#23](https://github.com/shahzaibkhalid/shaizei/pull/23) Turn off `prop-types` rule. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))

#### :bug: Bug Fix
* `webpack-config`
  * [#26](https://github.com/shahzaibkhalid/shaizei/pull/26) Handle certain tooling for CI/CD. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
  * [#25](https://github.com/shahzaibkhalid/shaizei/pull/25) Fix logging of port-fallback in `shaizei build`. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))

#### :nail_care: Enhancement
* `webpack-config`
  * [#22](https://github.com/shahzaibkhalid/shaizei/pull/22) Add new extensions for webpack absolute imports. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))

#### :memo: Documentation
* `eslint-config`
  * [#20](https://github.com/shahzaibkhalid/shaizei/pull/20) Changed the file setup of `.eslintrc.js`. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))

#### :house: Internal
* `babel-preset`
  * [#21](https://github.com/shahzaibkhalid/shaizei/pull/21) Remove `babel-plugin-emotion`. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))

#### Committers: 1
- Shahzaib Khalid ([@shahzaibkhalid](https://github.com/shahzaibkhalid))

## v0.1.0-beta.4 (2019-03-31)

#### :bug: Bug Fix
* `webpack-config`
  * [#18](https://github.com/shahzaibkhalid/shaizei/pull/18) Fix clean-webpack-plugin API mismatch bug. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
  * [#19](https://github.com/shahzaibkhalid/shaizei/pull/19) Fixing corejs versioning issue. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))

#### Committers: 1
- Shahzaib Khalid ([@shahzaibkhalid](https://github.com/shahzaibkhalid))

## v0.1.0-beta.3 (2019-03-30)

#### :nail_care: Enhancement
* `typescript-config`
  * [#17](https://github.com/shahzaibkhalid/shaizei/pull/17) Update dependencies. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
* `scripts`
  * [#16](https://github.com/shahzaibkhalid/shaizei/pull/16) Update dependencies. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
* `eslint-config`
  * [#14](https://github.com/shahzaibkhalid/shaizei/pull/14) Update dependencies. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
* `babel-preset`
  * [#13](https://github.com/shahzaibkhalid/shaizei/pull/13) Update dependencies. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
* `webpack-config`
  * [#12](https://github.com/shahzaibkhalid/shaizei/pull/12) Update dependencies. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))

#### :house: Internal
* `scripts`
  * [#15](https://github.com/shahzaibkhalid/shaizei/pull/15) Remove `dotenv` package. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
* `cli`
  * [#11](https://github.com/shahzaibkhalid/shaizei/pull/11) Remove `yarn.lock` file for `cli` package. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))

#### Committers: 1
- Shahzaib Khalid ([@shahzaibkhalid](https://github.com/shahzaibkhalid))


## v0.1.0-beta.2 (2019-03-24)

#### :bug: Bug Fix
* `@shaizei:cli`
  * [#2](https://github.com/shahzaibkhalid/shaizei/pull/2) Fix CLI version bug. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))

#### :nail_care: Enhancement
* `@shaizei:babel-preset`, `@shaizei:cli`, `@shaizei:eslint-config`, `@shaizei:prettier-config`, `@shaizei:scripts`, `@shaiz
ei:typescript-config`, `@shaizei:webpack-config`
  * [#1](https://github.com/shahzaibkhalid/shaizei/pull/1) Update to package.json ([@shahzaibkhalid](https://github.com/shahzaibkhalid))

#### :house: Internal
* `eslint-config`
  * [#10](https://github.com/shahzaibkhalid/shaizei/pull/10) Update 'eslint-config' folder name. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
* `prettier-config`
  * [#9](https://github.com/shahzaibkhalid/shaizei/pull/9) Update 'prettier-config' folder name. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
* `scripts`
  * [#8](https://github.com/shahzaibkhalid/shaizei/pull/8) Update 'scripts' folder name. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
* `typescript-config`
  * [#7](https://github.com/shahzaibkhalid/shaizei/pull/7) Update 'typescript-config' folder name. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
* `webpack-config`
  * [#6](https://github.com/shahzaibkhalid/shaizei/pull/6) Update 'webpack-config' folder name. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
* `cli`
  * [#5](https://github.com/shahzaibkhalid/shaizei/pull/5) Update 'cli' folder name. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
* `babel-preset`
  * [#4](https://github.com/shahzaibkhalid/shaizei/pull/4) Update babel-preset folder name. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
* `@shaizei:scripts/scripts`
  * [#3](https://github.com/shahzaibkhalid/shaizei/pull/3) Change to cross-spawn for scripts. ([@shahzaibkhalid](https://github.com/shahzaibkhalid))

#### Committers: 1
- Shahzaib Khalid ([@shahzaibkhalid](https://github.com/shahzaibkhalid))
