'use strict';
import Ids from '../models/ids.js';

export default class BaseComponent{
	async getId(type){
		try{
			const idData = await Ids.findOne();
			idData[type]++;
			await idData.save();
			return idData[type]
		}catch(e){
			console.log('获取ID失败');
			throw new Error(e);
		}
	}
}