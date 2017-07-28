'use strict';

import mongoose from 'mongoose';

const message_Schema = new mongoose.Schema({
	message_id:Number,
	send_id:Number,
	receive_id:Number,
	send_name:String,
	message_type:{type:Number,default:1},  //信息类型
	image:{type:String,default:''},
	message:{type:String,default:''},
	is_read:{type:Number,default:0},  //是否已读
	send_time:String
});
message_Schema.index({message_id: 1});

const Message = mongoose.model('Message', message_Schema);

export default Message;