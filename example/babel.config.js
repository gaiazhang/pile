module.exports = function config(api) {
  const env = api.env();
  const envOpts = {
    loose: true,
    modules: false,
    exclude: ['transform-typeof-symbol'],
  };
  switch (env) {
    case 'development':
      envOpts.debug = true;
      envOpts.targets = {
        node: 'current',
      };
      break;
    case 'test':
      envOpts.targets = {
        node: 'current',
      };
      break;
    default:
      envOpts.debug = true;
      envOpts.targets = {
        node: 'current',
      };
      break;
  }
  const config = {
    comments: false,
    presets: [['@babel/env', envOpts], '@babel/preset-react'],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-transform-flow-strip-types',
      ['@babel/proposal-class-properties', { loose: true }],
      '@babel/proposal-export-namespace-from',
      [
        '@babel/proposal-object-rest-spread',
        { useBuiltIns: true, loose: true },
      ],
      [
        'import',
        {
          libraryName: '../../../bundle',
          camel2UnderlineComponentName: false,
          camel2DashComponentName: false,
          customName(name) {
            if (name) {
              return `../../../bundle/node_modules/@pile/${name}`;
            }
          },
        },
      ],
    ].filter(Boolean),
  };
  return config;
};
