import io from 'socket.io-client'
const base = {
	server: 'http://127.0.0.1:3000/room',
	socket: 'http://127.0.0.1:3000'
}

const ClientSocket = {
  	socket:null,
	init(username){
		this.socket = io.connect(base.server,{'force new connection': true}),
		this.socket.on('open',()=>{
	      console.log('已连接')
	    })
	    this.socket.emit('addUser',username);
	},
	//发送信息
	sendMessage(obj){
		this.socket.emit('sendMsg', obj);
	},
	//接收信息
	receiveMessage(username,cb){
		this.socket.on('send'+username,(data)=>{
			cb(data);
		})
	},
	//退出
	logout(){
	    this.socket.disconnect();
	}
}

export default ClientSocket;

