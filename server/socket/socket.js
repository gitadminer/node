'use strict';

const ioEvents = function(io){
	io.of('/room').on('connection',(socket)=>{
		//有新用户加入聊天室
		socket.on('addUser',(userid)=>{

		})
		//退出聊天室
		socket.on('disconnet',(userid)=>{
			
		})
	})
}

export const init = (app)=>{
	let server = require('http').Server(app);
	let io = require('socket.io')(server);
	return server;
}