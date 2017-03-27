var express = require('express');
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var expressLayouts = require('express-ejs-layouts');
var site = require('./routes/site');
var oauth2 = require('./oauth2');
var util = require('util');

var PORT = process.env.PORT || 3000;
  
var app = express();
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ 
    secret: 'keyboard cat', 
    saveUninitialized: false, 
    resave: false 
}));

app.use(passport.initialize());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler({ dumpExceptions: true, showStack: true }));

// Passport configuration

require('./auth');

// App views
app.get('/', site.index);

// Authorization
app.get('/dialog/authorize', oauth2.authorization);
app.post('/dialog/authorize/decision', oauth2.decision);
app.post('/oauth/token', oauth2.token);

app.listen(PORT);
