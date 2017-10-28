import cfg from './webpack.config.js'

export default cfg({
  isProduction: false,
  devtool: 'cheap-module-source-map',
  sassLoader: 'sass-loader?outputStyle=expanded&sourceMap=true',
  cssFileName: 'style.css',
  entry: '../src/index',
  outputDir: '../public/assets',
  outputFilename: 'js/bundle.js',
  port: 54677
})
