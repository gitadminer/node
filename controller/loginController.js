'use strict';
/**
	user login/logout
*/
import userModel from '../models/userModel.js';
import formidable from 'formidable';
class loginController{
	constructor(){

	}
	async login(req, res, next){
		res.send({
			code:200,
			data:'success'
		})
	}
	async register(req, res, next){
		let form = new formidable.IncomingForm();
		form.parse(req,(error,fields, files)=>{
			if(error){
				res.send({
					code:-200,
					type:'FROM_DATA_ERROR',
					message:'表单内容有误'
				})
				return;
			}
			let {username,password} = fields;
			await let admin = userModle.findOne({username})
			if(admin){
				res.send({
					code:-200,
					type:'USER_DATA_ERROR',
					message:'用户民已经存在'
				})
				return;
			}

		})
	}
	async logout(req, res, next){
		res.send({
			code:200,
			data:'success'
		})
	}
}
export default new loginController();