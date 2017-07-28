'use strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const adminSchema = new Schema({
	username:String,
	password:String,
	id: Number,
	create_time: String,
	profile:String, //头像
	status:0  //登录状态
	is_in_room:0 //是否在聊天室
})

adminSchema.index({id: 1});

const Admin = mongoose.model('Admin', adminSchema);


export default Admin