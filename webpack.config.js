'use strict';

// Modules
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;

var isProd = ENV === 'build';

module.exports = function makeWebpackConfig () {
  var config = {};

  /**
   * Entry
   * Reference: http://webpack.github.io/docs/configuration.html#entry
   */
  config.entry = {
    app: './src/app.js'
  };

  config.output = {
    path: __dirname + '/dist',
    publicPath: isProd ? '/' : 'http://localhost:8080/',
    filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
    chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
  };

  if (isProd) {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval-source-map';
  }


  // Initialize module
  config.module = {
    preLoaders: [],
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  };



  config.plugins = [];
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      inject: 'body'
    })
  )

  // Add build specific plugins
  if (isProd) {
    config.plugins.push(
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new CopyWebpackPlugin([
        { from: __dirname + '/src/index.html' }
      ])
    )
  }

  config.devServer = {
    contentBase: './src',
    stats: 'minimal'
  };

  return config;
}();
