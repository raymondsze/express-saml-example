module.exports = {
  presets: ['@babel/preset-typescript'],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    '@babel/plugin-transform-object-assign'
  ],
  env: {
    development: {},
    production: {},
  },
};
