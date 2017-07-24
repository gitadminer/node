'use strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const messageSchema = new Schema({
	message_id:Number,
	send_id:Number,
	receive_id:Number,
	type:1,
	image:String,
	message:String,
})
adminSchema.index({message_id: 1});

const Message = mongoose.model('Message', messageSchema);

export default Message;