module.exports = {
    outputDir: 'docs',
    publicPath: process.env.NODE_ENV === 'production'
    ? '/amountapp/'  // リポジトリ名を指定
    : '/'
  }