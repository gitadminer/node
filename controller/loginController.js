/**
	user login/logout
*/

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
		res.send({
			code:200,
			data:'success'
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