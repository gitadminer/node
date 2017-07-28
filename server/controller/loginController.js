'use strict';
/**
	user login/logout
*/
import BaseComponent from './baseController.js';
import userModel from '../models/userModel.js';
import formidable from 'formidable';
import jsonwebtoken from 'jsonwebtoken';
class loginController extends BaseComponent{
	constructor(){
		super()
		this.test =this.test.bind(this);
		this.register =this.register.bind(this);
	}
	async login(req, res, next){
		let form = new formidable.IncomingForm();
		form.parse(req,async (error,fields, files)=>{
			if(error){
				res.send({
					code:-500,
					type:'FROM_DATA_ERROR',
					message:'表单内容有误'
				})
				return;
			}
			let {username,password} = fields;
			if(!username&&!password){
				res.send({
					code:-500,
					type:'FROM_DATA_ERROR',
					message:'表单内容格式错误'
				})
				return;
			}
			let name = await userModel.findOne({username});

			if(!name){
				res.send({
					code:-500,
					type:'FROM_DATA_UNEXIST',
					message:'用户名不存在'
				})
			}else{
				if(name.passowrd === password.password){
					let token = jsonwebtoken.sign({
					  exp: Math.floor(Date.now() / 1000) + (60 * 60 *24 * 7),
					  data: name.id
					}, 'secret');
					if(!token){
						res.send({
							code:-500,
							type:'ERROR'
						})
						return;
					}
					delete name.password;
					name.token = token
					res.send({
						code:200,
						data:name,
						message:'登录成功'
					})
				}else{
					res.send({
						code:-500,
						type:'FROM_DATA_UNEXIST',
						message:'用户密码不存在'
					})
				}
			}

		})
	}
	async register(req, res, next){
		let form = new formidable.IncomingForm();
		form.parse(req,async (error,fields, files)=>{
			if(error){
				res.send({
					code:-500,
					type:'FROM_DATA_ERROR',
					message:'表单内容有误'
				})
				return;
			}
			let {username,password} = fields;
			if(!username&&!password){
				res.send({
					code:-500,
					type:'FORM_DATA_ERROR',
					message:'表单内容格式错误'
				})
				return;
			}
			let name = await userModel.findOne({username});
			if(name){
				res.send({
					code:-500,
					type:'USER_DATA_ERROR',
					message:'用户名已存在'
				})
			}else{
				//const status = 1; //登录状态
				const user_id = await this.getId('user_id');
				const User = {
					username,
					password,
					id:user_id,
					status:1,
					create_time:new Date().getTime(),
					profile:''
				}
				await userModel.create(User);
				delete User.password;
				res.send({
					code:200,
					message: User,
				})

			}
		})
	}
	async logout(req, res, next){
		res.send({
			code:200,
			data:'success'
		})
	}
	async test(req,res,next){
		res.send({id:await this.getId('user_id')})
	}
}
export default new loginController();