const { findConfig, configKeys } = require('@shaizei/helpers');
const reactHotLoader = require('./src/plugins/reactHotLoader');
const classProperties = require('./src/plugins/classProperties');
const dynamicImport = require('./src/plugins/dynamicImport');
const transformRuntime = require('./src/plugins/transformRuntime');
const transformReactRemovePropTypes = require('./src/plugins/transformReactRemovePropTypes');
const react = require('./src/presets/react');
const env = require('./src/presets/env');
const typescript = require('./src/presets/typescript');
const emotionCssProp = require('./src/presets/emotionCssProp');

function shaizeiBabelPreset() {
  const NODE_ENV = process.env.BABEL_ENV || process.env.NODE_ENV;
  const isTypeScript = findConfig(configKeys.typescript);
  const isEmotion = findConfig(configKeys.emotion);

  const plugins = [
    reactHotLoader(),
    classProperties(),
    dynamicImport(),
  ];

  const presets = [
    react(NODE_ENV),
    env(),
  ];

  if (isTypeScript) presets.push(typescript());
  /**
   * Keep emotion preset at the end otherwise it won't work!
   * Source: https://emotion.sh/docs/@emotion/babel-preset-css-prop
   */
  if (isEmotion) presets.push(emotionCssProp(NODE_ENV));

  if (NODE_ENV === 'production') plugins.push(
    transformRuntime(),
    transformReactRemovePropTypes()
  );

  return {
    plugins,
    presets
  }
};

module.exports = shaizeiBabelPreset;
