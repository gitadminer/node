'use strict';

module.exports = {
	port:3000,
	host:'mongodb://127.0.0.1:27017/admin',
	session: {
		name: 'SID',
		secret: 'SID',
		cookie: {
			httpOnly: true,
		    secure:   false,
		    maxAge:   365 * 24 * 60 * 60 * 1000,
		}
	},
	mysql:{
		host:'127.0.0.1',
		user:'root',
		password:'',
		database:'node',
		prot:3306
	}
}