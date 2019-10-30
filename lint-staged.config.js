module.exports = {
  '*.{ts, js, json, md}': ['yarn prettier', 'git add'],
  '*.ts': ['yarn lint', 'yarn prettier', 'git add'],
};
