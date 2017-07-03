'use strict';
var path = require('path');
var webpack = require('webpack');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
function assetsPath(_path){
	var assetsSubDirectory = 'static'
  	return path.posix.join(assetsSubDirectory, _path)
}

module.exports = {
	entry:{
		app:resolve('/public/app.js')
	},
	output:{
		path:resolve('/dist'),  //build 目录
		publicPath:'/',
		filename: '[name].js', //编译后的文件名字
	},
	resolve: {
        extensions: ['.js', '.jsx','.scss', '.css'], //后缀名自动补全
    },
	module:{
		rules:[
			{
	            test: /\.jsx$/,
	            loaders: ['react-hot','babel'],
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
		        },
		        include: resolve('public')
		    },
		    {
		        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
		        loader: 'url-loader',
		        query: {
		          limit: 10000,
		          name: assetsPath('fonts/[name].[hash:7].[ext]')
		        },
		        include: resolve('public')
		    }
		]
	}
}


