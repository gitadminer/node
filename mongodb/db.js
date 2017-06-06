'use strict';

import mongoose from 'mongoose';
import config from 'config-lite';
mongoose.connect(config.host, {server:{auto_reconnect:true}});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
//链接一次数据库
db.once('open',()=>{
	console.log('connect success');
})
//监听错误
db.on('error',(error)=>{
	console.log('error:'+error);
	mongoose.disconnect();
})

db.on('close',()=>{
	console.log('closed database,not connect');
    mongoose.connect(config.host, {server:{auto_reconnect:true}});
})

export default db;
