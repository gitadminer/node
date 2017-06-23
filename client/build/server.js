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

Object.keys({}).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());


app.use(devMiddleware)
app.use(hotMiddleware)
app.use(express.static('dist'))

var uri = 'http://localhost:' + config.port
devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(config.port, function (err) {
  if (err) {
    console.log(err)
    return
  }
})