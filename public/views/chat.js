import React from 'react';

import {Input,Button} from 'antd';
const { TextArea } = Input;
import '../assets/style/chat.scss';
import ClientSocket from '../socket.js';


export default class Chat extends React.Component{
	state ={
		messageLoading:false,
		message:''
	}
	constructor(props){
		super(props)
	}
	componentDidMount() {
	    this.user = JSON.parse(window.localStorage.getItem('user'));
	    //链接服务器
	    ClientSocket.init(this.user.username);
	    //打开信息监听器
	    ClientSocket.receiveMessage(this.user.username,this.addChatLog)
	}
	shouldComponentUpdate(nextprops,nextstate){
	 	return true;
	}
	sendMsg(){
		if(this.state.message===''){
			return;
		}
		console.log(this.user);
		ClientSocket.sendMessage({
			send_id:this.user.id,
			receive_id:1,
			send_name:this.user.username,
			message_type:1,
			message:this.state.message
		})
		this.setState({ message: '' });
	}
	addChatLog(data){
		console.log(data)
	}
	updateData(e){
		this.setState({ message: e.target.value });
	}
	render(){
		const {message} = this.state;
		return(
			<div className="chat">
				 <TextArea placeholder="message" value={message} onChange={(e)=>this.updateData(e)} autosize={{ minRows: 2, maxRows: 6 }} />
				 <div className="send-btn">
				 	<Button type="primary" ghost="true" loading={this.state.messageLoading} onClick={this.sendMsg.bind(this)}>Send</Button>
				 </div>
			</div>
		)
	}
}