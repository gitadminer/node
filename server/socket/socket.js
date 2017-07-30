'use strict';

import messageController from '../controller/messageController.js';

const ioEvents =async function(io){
	
	io.of('/room').on('connection',async (socket)=>{
		//有新用户加入聊天室
		socket.emit('open')
		socket.on('addUser',(scoketID)=>{
			console.log(scoketID);
		})
		 socket.on('sendMsg',async (data)=>{
			socket.emit('send'+data.send_name,{code:'200',data:'发送成功'})

			//将信息返回数据库
			let results = await messageController.toSave(data);
			socket.emit('send'+results.send_name,results);
		})
	})
}

const scoket = (app)=>{
	let server = require('http').Server(app);
	let io = require('socket.io')(server);
	ioEvents(io);
	return server;
}
module.exports=scoket;