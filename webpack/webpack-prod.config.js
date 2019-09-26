const cfg = require('./webpack.config.js')

module.exports = cfg({
  mode: 'production',
  isProduction: true,
  devtool: 'source-map',
  // sassLoader: 'sass-loader?outputStyle=compressed&sourceMap=true',
  cssFileName: 'css/style.min.css',
  entry: '../src/index',
  outputDir: '../public/assets',
  outputFilename: 'js/bundle.min.js'
})
