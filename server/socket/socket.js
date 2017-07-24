'use strict';

export default const init = (app)=>{
	let server = require('http').Server(app);
	let io = require('socket.io')(server);
	return server;
}