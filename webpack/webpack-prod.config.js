import cfg from './webpack.config.js'

export default cfg({
  isProduction: true,
  devtool: 'source-map',
  sassLoader: 'sass-loader?outputStyle=compressed&sourceMap=true',
  cssFileName: 'style.min.css',
  entry: '../src/index',
  outputDir: '../public/assets',
  outputFilename: 'js/bundle.min.js'
})
