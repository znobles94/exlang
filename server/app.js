var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');

app.use(express.static('/etc/exlang/client/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// view engine
app.set('view engine', 'pug');

// sessions
app.set('trust proxy', 1);
app.use(session({
	secret: 'xxxx',
	resave: true,
	saveUninitialized: true,
	cookie: { secure: false, HttpOnly: false },
}));

// var loginRouter = require('./routes/loginRouter.js');
// var logoutRouter = require('./routes/logoutRouter.js');
// var registerRouter = require('./routes/registerRouter.js');
var apiRouter = require('./routes/apiRouter.js');
var confLinkRouter = require('./routes/confLinkRouter.js');
var homeRouter = require('./routes/homeRouter.js');

app.use('/api', apiRouter);
app.use('', confLinkRouter);
app.use('*', homeRouter);

app.listen(9876, () => {
	console.log('Node application backend now listening on 9876...');
});
