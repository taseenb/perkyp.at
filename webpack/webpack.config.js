const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

// const httpServerUrl = 'http://localhost:7777/' // Node server (backend)

module.exports = options => {
  const isProd = options.isProduction
  const mode = options.isProduction ? 'production' : 'development'
  const env = JSON.stringify(mode)
  const ExtractSASS = new ExtractTextPlugin(`css/${options.cssFileName}`)
  const entry = [path.join(__dirname, options.entry)]

  // if (env === 'development') {
  //   console.log('DEVELOPMENT')
  //   entry.unshift('webpack/hot/dev-server')
  //   // entry.unshift('webpack/hot/dev-server', 'webpack-hot-middleware/client')
  //   // entry.unshift('webpack-dev-server/client?' + httpServerUrl, 'webpack/hot/dev-server')
  // }

  const cfg = {
    entry,
    output: {
      path: path.join(__dirname, options.outputDir),
      filename: options.outputFilename
    },
    mode,
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react',
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      browsers: [
                        '>1.5%',
                        'not ie <12',
                        'not iOS <9',
                        'not Android <5',
                        'not Opera <1000',
                        'not Samsung <1000',
                        'not Baidu <1000',
                        'not ExplorerMobile <1000',
                        'not OperaMobile <1000',
                        'not OperaMini all',
                        'not dead'
                      ]
                    },
                    // forceAllTransforms: true, // needed by uglifyjs because it doesn't support ES6 yet
                    useBuiltIns: 'entry'
                  }
                ]
              ],
              plugins: isProd ? ['@babel/plugin-transform-react-inline-elements'] : undefined
            }
          }
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
        {
          test: /\.modernizrrc.js$/,
          loader: 'modernizr-loader'
        },
        {
          test: /\.modernizrrc(\.json)?$/,
          loader: 'modernizr-loader!json-loader'
        },
        {
          test: /\.(glsl|frag|vert|vs|fs|txt|html)$/,
          use: 'raw-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(glsl|frag|vert|vs|fs)$/,
          loader: 'glslify-loader',
          exclude: /node_modules/
        }
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
      port: options.port,
      inline: true,
      // contentBase: '.',
      // watchContentBase: true,
      // publicPath: '/',
      hot: false
      // proxy: {
      //   '/': httpServerUrl
      // }
      // watchOptions: {
      //   aggregateTimeout: 300,
      //   poll: 1000
      // }
      // useLocalIp: true
    }

    // cfg.plugins.push(new webpack.NamedModulesPlugin())
    // cfg.plugins.push(new webpack.HotModuleReplacementPlugin())

    cfg.plugins.push(new WriteFilePlugin())
  }

  cfg.plugins.push(ExtractSASS)

  return cfg
}
