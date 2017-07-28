/**
 message center
*/
import baseController from './baseController.js';
import userModel from '../models/userModel.js';
import messageModel from '../models/messageModel.js';
import formidable from 'formidable';


class Message extends baseController{
	constructor(props) {
		super(props);
		this.savemessage = this.savemessage.bind(this);
	}
	async savemessage(req, res, next){
		let form = new formidable.IncomingForm();
		form.parse(req,async (error,fields, files)=>{
			if(error){
				res.send({
					code:-500,
					message:'数据格式有误'
				})
				return;
			}
			let {send_id,receive_id,send_name,message_type,is_read} = fields;
			if(!send_id||!receive_id||!send_name||!message_type||!is_read){
				res.send({
					code:-500,
					message:'数据格式有误'
				})
				return;
			}
			const message_id = await this.getId('message_id');
			let message = {
				message_id:message_id,
				send_id:send_id,
				receive_id:receive_id,
				send_name:send_name,
				message_type:message_type,  //信息类型
				is_read:0,  //是否已读
				send_time:new Date().getTime()
			}
			if(message_type == 1){
				message.message = fields.message
			}else if(message_type == 2){
				message.image = fields.image
			}
			await messageModel.ceate(message);
			res.send({
				code:200,
				data:message
			})
		})
	}
}
export default new Message();