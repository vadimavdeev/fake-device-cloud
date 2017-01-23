var express = require('express');
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var site = require('./routes/site');
var oauth2 = require('./oauth2');
var user = require('./routes/user');
var client = require('./routes/client');
var util = require('util');

  
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'keyboard dog', saveUninitialized: false, resave: false }));

app.use(passport.initialize());
app.use(passport.session());
app.use(errorHandler({ dumpExceptions: true, showStack: true }));

// Passport configuration

require('./auth');


app.get('/', site.index);
app.get('/login', site.loginForm);
app.post('/login', site.login);
app.get('/logout', site.logout);
app.get('/account', site.account);

app.get('/dialog/authorize', oauth2.authorization);
app.post('/dialog/authorize/decision', oauth2.decision);
app.post('/oauth/token', oauth2.token);

app.get('/api/userinfo', user.info);
app.get('/api/clientinfo', client.info);

app.listen(3000);
