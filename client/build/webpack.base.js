'use strict';
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
	entry:{
		app:resolve('public/app')
	},
	output:{
		path:resolve('/dist'),  //build 目录
		publicPath:'/dist',
		filename: '[name].js', //编译后的文件名字
	},
	resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    },
	module:{
		rules:[
			{
	            test: /\.jsx$/,
	            loaders: ['react-hot', 'jsx', 'babel'],
	            include: resolve('public/app')
	        },
			{
	       		test: /\.js$/,
	        	loader: 'babel-loader',
	        	include: resolve('public')
	        },
	        {
		        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
		        loader: 'url-loader',
		        query: {
		          limit: 10000,
		          name: 'images/[name].[hash:7].[ext]'
		        }
		    },
		    {
		        test: /\.css/,
		        loaders: ['style', 'css', 'autoprefixer']
		    },
		    {
		        test: /\.scss/,
		        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
		    },
		    {
		        test: /\.json$/,
		        loader: 'json'
		     },
		    {
		        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
		        loader: 'url-loader',
		        query: {
		          limit: 10000,
		          name: 'fonts/[name].[hash:7].[ext]'
		        }
		    }
		]
	}
}


