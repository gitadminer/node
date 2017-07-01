/**
	admin
*/
import BaseController from '../common/baseComponent.js';
class Admin extends BaseController{
	constructor(props){
		super(props);
	}
	async index(req, res, next){
		res.send({
			code:200,
			data:'success'
		})
	}
}
export default new Admin()