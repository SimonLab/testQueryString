var wrapers = {};
var fs = require('fs');
var qs = require('query-string');

wrapers["GET /"] = function (request, response) {
	fs.readFile(__dirname + "/index.html", function (err, data){
		response.write(data.toString());
		response.end();
	});
};

wrapers.query = function (queryString) {
  console.log("receive the queryString " + queryString);
  var obj = qs.parse(queryString);
  console.log(obj);
};

wrapers.generic = function (request, response){
	fs.readFile(__dirname + request.url, function (err, data){
		if (err){
			fs.readFile(__dirname + "/404.html", function (err, data){
				response.writeHead(404);
				response.write(data);
				response.end();
			});
		} else {
			var ext = request.url.split('.')[1];
      response.writeHead(200, {'Content-Type' : 'text/' + ext});
			response.write(data.toString());
			response.end();
		}
	});
};

module.exports = wrapers;
