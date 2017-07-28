'use strict';

import BaseController from '../controller/baseController.js';
const ioEvents =async function(io){

	io.of('/room').on('connection',async (socket)=>{
		//有新用户加入聊天室
		socket.emit('open')
		socket.on('addUser',(scoketID)=>{
			console.log(scoketID);
		})
		 socket.on('sendMsg',async (data)=>{
			socket.emit('send'+data.username,{code:'200',data:'发送成功'})

			//将信息返回数据库
			const request =  await BaseController.fetch('/chat/save',data,type='post');
			socket.emit('send'+data.username,request);
			//console.log(data)
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