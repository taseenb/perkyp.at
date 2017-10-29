const cfg = require('./webpack.config.js')

module.exports = cfg({
  isProduction: true,
  devtool: 'source-map',
  sassLoader: 'sass-loader?outputStyle=compressed&sourceMap=true',
  cssFileName: 'style.min.css',
  entry: '../src/index',
  outputDir: '../public/assets',
  outputFilename: 'js/bundle.min.js'
})
