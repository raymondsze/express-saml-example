// References: https://prettier.io/docs/en/configuration.html
// Normally, we use prettier with husky and lint-staged to
// consist the coding style before any git commit.
// Here we trying to set a rules that fit with tslint-config-airbnb
module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: false,
  printWidth: 200,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  proseWrap: 'never',
};
