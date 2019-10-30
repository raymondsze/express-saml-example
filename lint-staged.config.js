module.exports = {
  '*.{ts, js, json, md}': [
    'yarn prettier',
    'git add',
  ],
  '*.ts': [
    'yarn lint:ts --fix',
    'yarn prettier',
    'git add',
  ]
};
