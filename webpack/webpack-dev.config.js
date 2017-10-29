const cfg = require('./webpack.config.js')

module.exports = cfg({
  isProduction: false,
  devtool: 'cheap-module-source-map',
  sassLoader: 'sass-loader?outputStyle=expanded&sourceMap=true',
  cssFileName: 'style.css',
  entry: '../src/index',
  outputDir: '../public/assets',
  outputFilename: 'js/bundle.js',
  port: 54677
})
