module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    '@babel/plugin-transform-object-assign',
    ['babel-plugin-module-resolver', {
      extensions: ['ts'],
      alias: { '~': './src' }
    }]
  ],
  env: {
    development: {},
    production: {},
  },
};
