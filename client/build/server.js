var express = require('express');
var path = require('path')
var config = require('./config.js');
var webpack = require('webpack');
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.js')

var app = express()
var compiler = webpack(webpackConfig)

var  devMiddleware = require('webpack-dev-middleware')(compiler, {
	publicPath: webpackConfig.output.publicPath,
	hot: true,
	historyApiFallback: true,
	inline: true,
	progress: true,
	stats: {
		colors: true,
	}
});

var hotMiddleware = require('webpack-hot-middleware')(compiler)
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})


app.use(devMiddleware)
app.use(hotMiddleware)

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})


module.exports = app.listen(config.port, function (err) {
  if (err) {
    console.log(err)
    return
  }
})