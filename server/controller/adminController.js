/**
	admin
*/
import BaseComponent from './baseController.js';

class Admin extends BaseComponent{
	constructor(){
		super();
		this.getQiniuToken = this.getQiniuToken.bind(this);
	}
	async index(req, res, next){
		res.send({
			code:200,
			data:'success'
		})
	}
	async getQiniuToken(req,res,next){
		let token = await this.qiniuToken();
		res.send({
			uptoken:token
		})
	}
}
export default new Admin()