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
	    let user = JSON.parse(window.localStorage.getItem('user'));
	    ClientSocket.init(user.username);
	}
	shouldComponentUpdate(nextprops,nextstate){
	 	return true;
	}
	sendMsg(){
		ClientSocket.sendMessage({
			type:1,
			username:'ss',
			message:this.state.message
		})
		//console.log(this.state.message);
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