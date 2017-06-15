// Dummy proxy to by pass the CORS policy in browsers
// WM shouldn't need it, we will be sending the Access-Control-Allow-Origin
// header to enable browsers to make cross origin requests. 

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var querystring = require('querystring');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var path = require('path');
const https = require('https');
var request = require('request');

var options = {
    url: 'https://www.linkedin.com/oauth/v2/accessToken',
    method: 'POST',
    form: {   //the POST request's body data
	   grant_type: 'authorization_code',
	   code: '',
	   redirect_uri: 'http://www.carriedo.es/linkedin/oauth2Callback',
	   client_id: 'ClientIDProvidedByLinkedin',
	   client_secret: 'ClientSecretProvidedByLinkedin'      
	}
}

var PORT = 1234;
// viewed at http://localhost:<PORT>
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
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

app.listen(PORT);
console.log("Server listening at port " + PORT);