import mysql from 'promise-mysql';
const config = require('config-lite')(__dirname);
const connection = mysql.createPool({
	host:config.mysql.host,
	user:config.mysql.user,
	password:config.mysql.password,
	database:config.mysql.database
})
// connection.connect((err)=>{
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }

//   console.log('connected as id ' + connection.threadId);
// });
export default connection;