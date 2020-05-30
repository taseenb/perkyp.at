const path = require('path')
const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = env => {
  // const mode = options.isProduction ? 'production' : 'development'
  const isProd = env.NODE_ENV === 'production'

  return {
    entry: './src/server/index.js',
    output: {
      path: path.join(__dirname, './'),
      filename: isProd ? 'server.js' : 'server-dev.js'
    },
    mode: env.NODE_ENV || 'development',
    // devtool: 'cheap-module-inline-source-map',
    target: 'node',
    node: false, // IMPORTANT!
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              envName: 'NODE_ENV',
              presets: [
                '@babel/preset-react',
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      node: process.versions.node
                    },
                    useBuiltIns: 'entry',
                    corejs: 3
                  }
                ]
              ]
            }
          }
        },
        {
          test: /\.(txt|html)$/,
          use: 'raw-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins: isProd ? [] : [new NodemonPlugin()]
  }
}
