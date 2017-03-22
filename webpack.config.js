const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

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

function wrapStrings(obj) {
    const newobj = {};
    Object.keys(obj).forEach((key) => {
        const val = obj[key];
        newobj[key] = typeof val === 'string' ? JSON.stringify(val) : val;
    });
    return newobj;
}

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
    new webpack.DefinePlugin(wrapStrings(require('./env.json')))
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
