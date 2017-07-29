'use strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const adminSchema = new Schema({
	username:String,
	password:String,
	id: Number,
	create_time: String,
	profile:{type:String,default:'default.jpg'}, //头像
	status:{type:Number,default:0},  //登录状态
	is_in_room:{type:Number,default:0}, //是否在聊天室
	auth:{type:Number,default:1}  //0,管理员，1是普通用户
})

adminSchema.index({id: 1});

const Admin = mongoose.model('Admin', adminSchema);


export default Admin