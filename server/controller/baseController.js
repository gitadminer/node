'use strict';
import fetch from 'node-fetch';
import Ids from '../models/ids.js';
import qiniu from 'qiniu';
qiniu.conf.ACCESS_KEY = 'fJIynaY0F6Kc8_wGezZdj3KzRzJ3UzKwlwRQXIYK';
qiniu.conf.SECRET_KEY = 'vLiQndy2T8pnWF-WIsD8mno0vT-Yqi3X8cl2yKAQ';

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
	async fetch(url = '', data = {}, type = 'GET', resType = 'JSON'){
		type = type.toUpperCase();
		resType = resType.toUpperCase();
		if (type == 'GET') {
			let dataStr = ''; //数据拼接字符串
			Object.keys(data).forEach(key => {
				dataStr += key + '=' + data[key] + '&';
			})

			if (dataStr !== '') {
				dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
				url = url + '?' + dataStr;
			}
		}

		let requestConfig = {
			method: type,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}

		if (type == 'POST') {
			Object.defineProperty(requestConfig, 'body', {
				value: JSON.stringify(data)
			})
		}
		let responseJson;
		try {
			const response = await fetch(url, requestConfig);
			if (resType === 'TEXT') {
				responseJson = await response.text();
			}else{
				responseJson = await response.json();
			}
		} catch (err) {
			console.log('获取http数据失败', err);
			throw new Error(err)
		}
		return responseJson
	}
	async qiniuToken(){
		const options = {
		  scope: 'ruiyang',
		  expires: 7200,
		  callbackBody: 'key=$(key)&hash=$(etag)&bucket=$(bucket)&fsize=$(fsize)&name=$(x:name)'
		}
		let mac = new qiniu.auth.digest.Mac(qiniu.conf.ACCESS_KEY,qiniu.conf.SECRET_KEY);

		let putPolicy = new qiniu.rs.PutPolicy(options);

		let token = await putPolicy.uploadToken(mac);
  			
  		return token;

	}
}