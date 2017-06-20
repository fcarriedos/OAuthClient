// Dummy server to simulate 3rd parties server side

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var querystring = require('querystring');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var path = require('path');
const https = require('https');
var request = require('request');

const LINKEDIN_CLIENT_ID = '78bjaadposy8ya';
const LINKEDIN_CLIENT_SECRET = '78bjaadposy8ya';

var options = {
    url: 'https://www.linkedin.com/oauth/v2/accessToken',
    method: 'POST',
    form: {   //the POST request's body data
	   grant_type: 'authorization_code',
	   code: '',
	   redirect_uri: 'http://www.carriedo.es/linkedin/oauth2Callback',
	   client_id: LINKEDIN_CLIENT_ID,
	   client_secret: LINKEDIN_CLIENT_SECRET      
	}
}

var PORT = 9000;
// viewed at http://localhost:<PORT>
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/auth_Webapp_sample.html'));
});

app.post('/token', function(req, res) {
	options.form.code = req.body.code;
	console.log(options.form);
	request(options, function (error, response, body) {
		console.log(body);
		res.send(body);
		res.end;
	});
});

app.get('/oauthcb', function(req, res) {
    res.send("Code received...");
    console.log("Your access code is: " + req.query.code);
});

app.listen(PORT);
console.log("Server listening at port " + PORT);



