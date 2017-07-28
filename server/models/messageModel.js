'use strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const messageSchema = new Schema({
	message_id:Number,
	send_id:Number,
	receive_id:Number,
	send_name:String,
	type:1,  //信息类型
	image:String,
	message:String,
	is_read:0,  //是否已读
	send_time:Date
})
adminSchema.index({message_id: 1});

const Message = mongoose.model('Message', messageSchema);

export default Message;