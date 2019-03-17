const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = env => {
  // const mode = options.isProduction ? 'production' : 'development'

  return {
    entry: './src/server/index.js',
    output: {
      path: path.join(__dirname, '../'),
      filename: 'server.js'
    },
    mode: env,
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
                    // modules: 'cjs',
                    targets: {
                      node: process.versions.node
                    },
                    useBuiltIns: 'entry'
                  }
                ]
              ]
            }
          }
        },
        { test: /\.(glsl|frag|vert|vs|fs|txt|html)$/, use: 'raw-loader', exclude: /node_modules/ },
        { test: /\.(glsl|frag|vert|vs|fs)$/, loader: 'glslify-loader', exclude: /node_modules/ },
        { test: /\.modernizrrc.js$/, loader: 'modernizr-loader' }
        // { test: /\.modernizrrc(\.json)?$/, loader: 'modernizr-loader!json-loader' }
      ]
    },
    plugins: []
  }
}
