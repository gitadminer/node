'use strict';
import jsonwebtoken from 'jsonwebtoken';
class Token{
	constructor(){

	}
	async setToken(userid){
		let token = jsonwebtoken.sign({
		  exp: Math.floor(Date.now() / 1000) + (60 * 60 *24 * 7),
		  data: userid
		}, 'secret');
	}
	async authToken(req,res,next){
		//检查数据是否携带验证携带token信息
		let token = req.body.token || req.query.token || req.headers['x-access-token'];
		if(!token){
			res.send({
				code:500,
				type:'Illegal_APPLY',
				message:'非法请求'
			})
			return;
		}
		jsonwebtoken.verify(token,'secret',(error,decode)=>{
			if(error){
				res.json({
					code:501,
					type:'EXPIRED_TOKEN',
					message:'用户失效，请重新登录'
				})
			}else{
				req.user_id = decode;
				next();
			}
		})
	}
}
export default new Token();
