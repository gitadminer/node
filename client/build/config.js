'use strict';

module.exports = {
	port:"8088",
	dev:{
		 NODE_ENV:"development",
		 publicPath:'/'
	},
	build:{
		NODE_ENV:"production",
		publicPath:'static'
	}
}

