'use strict';

const ioEvents = function(io){

	io.of('/room').on('connection',(socket)=>{
		//有新用户加入聊天室
		socket.emit('open')
		socket.on('addUser',(scoketID)=>{
			console.log(scoketID);
		})
		socket.on('sendMsg',(data)=>{
			console.log(data);
		})
		// //退出聊天室
		// socket.on('disconnet',(userid)=>{
			
		// })
	})
}

const scoket = (app)=>{
	let server = require('http').Server(app);
	let io = require('socket.io')(server);
	ioEvents(io);
	return server;
}
module.exports=scoket;