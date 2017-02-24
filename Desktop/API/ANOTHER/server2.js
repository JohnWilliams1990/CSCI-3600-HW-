// load the express package and create our app
var express = require('express');
var path = require('path');
var app = express();

//var bodyParser = require('body-parser'); // get body-parser
//var morgan = require('morgan'); // used to see requests

//http://www.codingdefined.com/2014/11/how-to-parse-urls-in-nodejs.html
var url = require('url');
var urlValue = 'http://localhost:1337/';
var parsedUrl = url.parse(urlValue, true, true);



	function funct(req)//, response)
	{

	var method = req.method;
	console.log(method);

	
							//var object = Object.keys(req.res);

 	 var response = {
 	 			 'method' : method,
 	 			 'headers' : req.headers,
				 'query' : req.query,
				 'body' : req.body
				  //'errors' : Json.message:"PUT ERRORS HERE FROM CONDITIONS AS VARIABLE"; // terinary object in the query or if else before
				};

var object = Object.keys(req.headers); //'for i in Object' creates a for loop to go through the object
var object1 = Object.keys(req.query); 
//var object2 = Object.keys(req.body); 
if (object.length == 0)
{
response.error = "There are no headers present"
}
if (object1.length == 0)
{
response.errors = "There are no queries present"
}


			var name = req.headers.variable|| "";// shawn
	var name1 = req.headers.variable1|| "";// shawn


		if (name.length == 0)
		{
			response.error_1 = "variable" + ": ~~~~~~~~ EMPTY VALUE or NO VARIABLE DECLARED ~~~~~~~~";
		}
		if (name1.length == 0)
		{
			response.error_2 = "variable1" + "~~~~~~~~ EMPTY VALUE or NO VARIABLE DECLARED ~~~~~~~~";
		}	

	//responce.item = "this item";
	//res.json(response);//takes object and puts it in a json object
	
	return response;


	}


//console.log(parsedUrl.query);

// send our index.html file to the user for the home page
app.get('/get', function(req, res,next) {

var object = Object.keys(req.headers); //'for i in Object' creates a for loop to go through the object

console.log(object.length)


res.json(funct(req));

});
	


app.post("/post", function (req, res,next){ // "*"
res.json(funct(req));
});

app.put("/put", function (req, res,next){
res.json(funct(req));
});

app.delete("/delete", function (req, res,next){
res.json(funct(req));
});

// catch all for bad requests against the url
app.use("/", function (req, res,next){

var method = req.method;
console.log(method + " Failed with error 405");

res.status(405);        // HTTP status 405: method not allowed
   res.send('Method is not supported by server');

		next();
});

// start the server
app.listen(1337);
console.log('1337 is the magic port!');
console.log("http://localhost:1337/");