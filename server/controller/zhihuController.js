'use strict';
import BaseComponent from './baseController.js';
import puppeteer from 'puppeteer'

class ZhiHu extends BaseComponent{
	constructor() {
		super()
		this.getList = this.getList.bind(this);
	}
	async getList(req, res, next){
		this.toAnalysis();
		res.send({
			code:200,
			message:'test'
		})
	}
	async toAnalysis(){
		let page;
		puppeteer.launch().then(async browser=>{
			page = await browser.newPage();
			await page.goto('http://daily.zhihu.com/',{
				networkIdleTimeout: 1000,
				waitUntil: 'networkidle' 
			})
			//let info = await page.mainFrame().$eval('.wrap .box',el=>el.outerHTML);

			let data = await getListData(page);
			await page.close();
			//browser.close();
		}).catch((error)=>{
			console.log(error)
		})
	}

}
export default new ZhiHu();

let timeout = function(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(1)
            } catch (e) {
                reject(0)
            }
        }, delay)
    })
}

const getListData = (page)=>{
	return page.evaluate(()=>{
		let list = [...document.querySelectorAll('.wrap .box')];
		return list.map((value)=>{
			return {
				url:value.querySelector('a').href,
				image:value.querySelector('img').src,
				text:value.querySelector('span').innerText
			}
		})
	})
}
