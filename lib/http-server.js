'use strict';

var http = require('http');
var time = require('time');
var url = require('url');
var now = new time.Date();

var server = http.createServer(function(req,res) {
	if(req.url === '/time'){
		res.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		res.write(now.toString());
		return res.end();
	};

	if(req.url.search('/greet') != -1){
		var url_parts = url.parse(req.url);
		var path = url_parts.path;

		if(req.method === 'GET'){
		  	res.writeHead(200, {
			'Content-Type': 'text/plain'
			});
			res.write(path);
			console.log(path);
			return res.end(); 
		}
/*
		if(req.method === 'POST') {
			req.on('data', function(data) {
		  	var parsed = JSON.parse(data, toString());
		  	console.log(data.toString());
		    });
			res.writeHead(200, {
			'Content-Type': 'application/json'
			});
			res.write('{"msg": "success!"}');
			return res.end();
		}
*/

		if(req.method === 'POST'){
			var name = path.slice(7,path.length);
			var jsonName = {'path_name': name};
			var jsonString = JSON.stringify(jsonName);
			var parsed = JSON.parse(jsonString);
			console.log(parsed.path_name);
			res.writeHead(200, {
				'Content-Type': 'application/json'
			});
			res.write(jsonString);
			return res.end();
		}

	}



	res.writeHead(404, {
		'Content-Type': 'text/plain'
	});
	res.write('page not found');
	res.end();
});
	
server.listen(3000);
console.log('server is listening');
