// set up ======================================================================
var express = require('express');
var app = express();						// create our app w/ express
var port = process.env.PORT || 8080; 				// set the port
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var requestLanguage = require('express-request-language');
var cookieParser = require('cookie-parser');

app.use(cookieParser("B-Hive App"));
app.use(requestLanguage({
  languages: ['en-US', 'zh-CN'],
  cookie: {
    name: 'language',
    options: { maxAge: 24*3600*1000 },
    url: '/languages/{language}'
  }
}));

var i18n = require('i18n');

i18n.configure({

//define how many languages we would support in our application
locales:['ar', 'zh'],

//define the path to language json files, default is /locales
directory: __dirname + '/locales',

//define the default language
defaultLocale: 'en',

// define a custom cookie name to parse locale settings from 
cookie: 'i18n'
}); 
app.use(i18n.init);


// app.get('/', function(req, res, next) {
//   console.log(req.language); // 'en-US'
// });

app.use(express.static('./public')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request


// routes ======================================================================
require('./app/routes.js')(app);


app.listen(port);
console.log("App listening on port " + port);
