var webpack = require('webpack');
var merge = require('webpack-merge');
var config = require('./config.js');
var baseWebpackConfig = require('./webpack.base.js');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')


module.exports = merge(baseWebpackConfig, {
  // cheap-module-eval-source-map is faster for development
  devtool: '#source-map',
   output: {
    path:  path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  module: {
    rules: [
      {
    		test: /\.css/,
    		use: ExtractTextPlugin.extract({
    			use:['css-loader'],
    			fallback: "style-loader"
    		})
      },
      {
    		test: /\.scss/,
    		use: ExtractTextPlugin.extract({
    			use:['css-loader','sass-loader'],
    			fallback: "style-loader"
    		})
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify('production')
    }),
    new ExtractTextPlugin({
      filename:'css/[name].[contenthash].css'
    }),
    new OptimizeCSSPlugin(),
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      filename: 'index.html',
      inject: true
    })
  ]
})