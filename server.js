var http = require("http");
var wrapers = require("./index.js");


http.createServer(function (request, response) {
  var requestQuery = request.url.split('?');
  console.log('request: ' + request.url);
  if(requestQuery[1]){
    wrapers.query(requestQuery[1]);
  }else{
	var wraper = wrapers[request.method + " " + request.url];

	if(wraper){
    wraper(request, response);
	}else{
		wrapers.generic(request, response);
	}
 }

}).listen(8000);
console.log('server is running');
