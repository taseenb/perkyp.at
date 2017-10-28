import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import WriteFilePlugin from 'write-file-webpack-plugin'

export default options => {
  const env = JSON.stringify(options.isProduction ? 'production' : 'development')
  const ExtractSASS = new ExtractTextPlugin(`css/${options.cssFileName}`)

  const cfg = {
    devtool: options.devtool,
    entry: [path.join(__dirname, options.entry)],
    output: {
      path: path.join(__dirname, options.outputDir),
      filename: options.outputFilename
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.(scss|sass)/,
          exclude: /(node_modules)/,
          use: ExtractSASS.extract([
            { loader: 'css-loader', options: { url: false } },
            { loader: 'postcss-loader', options: { sourceMap: true } },
            options.sassLoader
          ])
        },
        { test: /\.modernizrrc.js$/, loader: 'modernizr-loader' },
        { test: /\.modernizrrc(\.json)?$/, loader: 'modernizr-loader!json-loader' },
        { test: /\.(glsl|frag|vert|vs|fs)$/, use: 'raw-loader', exclude: /node_modules/ },
        { test: /\.(glsl|frag|vert|vs|fs)$/, loader: 'glslify-loader', exclude: /node_modules/ },
        { test: /\.txt|html/, use: 'raw-loader', exclude: /node_modules/ }
      ]
    },
    resolve: {
      alias: {
        modernizr$: path.resolve(__dirname, '../.modernizrrc')
      }
    },
    externals: {
      jquery: 'jQuery'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': { NODE_ENV: env }
      })
    ]
  }

  if (options.isProduction) {
    cfg.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          drop_console: true,
          warnings: false
        }
      })
    )
  } else {
    cfg.devServer = {
      contentBase: 'public',
      historyApiFallback: false,
      port: options.port,
      inline: true
      // useLocalIp: true,
      // hot: true
    }

    cfg.plugins.push(new WriteFilePlugin())
  }

  cfg.plugins.push(ExtractSASS)

  return cfg
}
