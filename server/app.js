import express from 'express';
import db from './mongodb/db.js';
import cookieParser from 'cookie-parser'
import session from 'express-session';
import connectMongo from 'connect-mongo';
import history from 'connect-history-api-fallback';
import AdminRouter from './router/admin.js';
const app = express();

app.all('*', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  	res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("X-Powered-By", '3.2.1')
	if (req.method == 'OPTIONS') {
	  	res.send(200);
	} else {
	    next();
	}
});

const config = require('config-lite')(__dirname);
const MongoStore = connectMongo(session);

app.use(cookieParser());
app.use(session({
	  	name: config.session.name,
		secret: config.session.secret,
		resave: true,
		saveUninitialized: false,
		cookie: config.session.cookie,
		store: new MongoStore({
	  	url: config.host
	})
}))

app.use('/',AdminRouter);
app.use(history());
app.use(express.static('./views'));

app.listen(20010);

//const io = require('./socket/socket.js')(app)
//io.listen(3000)
