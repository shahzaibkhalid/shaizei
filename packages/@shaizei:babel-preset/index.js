const shaizeiBabelPreset = (context, options = {}) => {
  
  const env = process.env.BABEL_ENV || process.env.NODE_ENV;

  const browserlistDev = [
    'last 2 chrome versions',
    'last 2 firefox versions',
    'last 2 edge versions'
  ];

  const browserlistProd = [
    '>1%',
    'last 4 versions',
    'Firefox ESR',
    'not ie < 1'
  ];

  const plugins = [
    require('react-hot-loader/babel'),
    [
      require.resolve('babel-plugin-emotion'),
      {
        sourceMap: true,
        autoLabel: env === 'development',
        labelFormat: '[local]',
        cssPropOptimization: true,
      }
    ],
    [
      require.resolve('@babel/plugin-proposal-class-properties'),
      {
        loose: false,
      },  
    ],
    [
      require.resolve('@babel/plugin-proposal-object-rest-spread'),
      {
        loose: false,
        useBuiltIns: false,
      },  
    ],
    require.resolve('@babel/plugin-syntax-dynamic-import'),
  ];

  const presets = [
    [
      require.resolve('@babel/preset-react'),
      {
        pragma: 'React.createElement',
        pragmaFrag: 'React.Fragment',
        useBuiltIns: false,
        development: env === 'development' ? true : false,
        throwIfNamespace: true,
      },  
    ],
    [
      require.resolve('@babel/preset-env'),
      {
        targets: env === 'production' ? browserlistProd : browserlistDev,
        spec: false,
        loose: false,
        modules: false,
        debug: false,
        useBuiltIns: 'usage',
        forceAllTransforms: false,
        configPath: process.cwd(),
        ignoreBrowserslistConfig: true,
        shippedProposals: true,  
      }
    ],
  ];

  if (options.typescript && options.typescript === true) {
    presets.push(require.resolve('@babel/preset-typescript'));
  }
  // keep emotion preset at the end otherwise it won't work :|
  if (options.emotion && options.emotion === true) {
    presets.push(require.resolve('@emotion/babel-preset-css-prop'));
  }

  if (env === 'production') {
    plugins.push(
      [
        require.resolve('@babel/plugin-transform-runtime'),
        {
          corejs: false,
          helpers: true,
          regenerator: true,
          useESModule: true,
        }
      ],
      [
        require.resolve('babel-plugin-transform-react-remove-prop-types'),
        {
          mode: 'remove',
          removeImport: true,
          ignoreFileNames: ['node_modules'],
        },    
      ]
    )
  }

  return {
    plugins,
    presets
  }
};

module.exports = shaizeiBabelPreset;
