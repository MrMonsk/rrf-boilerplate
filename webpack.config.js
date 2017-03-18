const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseLoaders = [
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "postcss-loader" })
  }, {
    test: /\.sass$/,
    loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: ['css-loader', 'sass-loader'] }),
    exclude: /\.static\.sass$/
  }, {
    test: /\.static\.sass$/,
    loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: ['css-loader', 'sass-loader'] }),
  }
];

module.exports = {
  devtool: 'source-map',
  entry: __dirname + '/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build')
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'styles.css',
      publicPath: '/styles/',
      allChunks: true
    }),
  ],
  module : {
    loaders : baseLoaders.concat([
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test : /\.jsx?/,
        loader : 'babel-loader',
        exclude: /node_modules/
      }
    ])
  },
  devServer: {
    historyApiFallback: true
  }
}
