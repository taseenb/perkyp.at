const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = env => {
  return {
    entry: './src/server/index.js',
    output: {
      path: path.join(__dirname, '../'),
      filename: 'index.js'
    },
    // devtool: 'cheap-module-inline-source-map',
    target: 'node',
    node: false, // IMPORTANT!
    externals: [nodeExternals()],
    resolve: {
      alias: {
        modernizr$: path.resolve(__dirname, '../.modernizrrc')
      }
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              forceEnv: 'NODE_ENV',
              presets: [
                'react',
                [
                  'env',
                  {
                    targets: {
                      node: process.versions.node
                    }
                  }
                ]
              ]
            }
          }
        },
        { test: /\.(glsl|frag|vert|vs|fs|txt|html)$/, use: 'raw-loader', exclude: /node_modules/ },
        { test: /\.(glsl|frag|vert|vs|fs)$/, loader: 'glslify-loader', exclude: /node_modules/ },
        { test: /\.modernizrrc.js$/, loader: 'modernizr-loader' },
        { test: /\.modernizrrc(\.json)?$/, loader: 'modernizr-loader!json-loader' }
      ]
    },
    plugins: []
  }
}
