'use strict';
import BaseComponent from './baseController.js';
import formidable from 'formidable';
const KEY = 'e1f4b57fb1cb4d45bbb75aef96653eae';
const ROBOT_URI = 'http://www.tuling123.com/openapi/api';
class RobotController extends BaseComponent{
	constructor(props) {
		super(props);
		this.getrobotinfo = this.getrobotinfo.bind(this);
	}
	async getrobotinfo(req,res,next){
		let form = new formidable.IncomingForm();
		form.parse(req,async (error,fields,files)=>{
			if(error){
				res.send({
					code:-500,
					type:'FROM_DATA_ERROR',
					message:'表单内容有误'
				})
				return;
			}
			let {info,type} = fields;
			/***************/
			let data = await this.fetch(ROBOT_URI,{
				key:KEY,
				info:info
			},'POST');
			if(data.code===100000){
				res.send(data)
			}
		})
	}
}
export default new RobotController();