var express = require("express");
var services = require("./mock/services.json");


var app = express();

app.set("view engine", "jade");
app.set("views", __dirname + "/views");

app.get("/", function(req, res){
	res.render("index.jade");

});

app.get("/services/:title?", function(req, res){
	var title = req.params.title;

	if (title === undefined) {
		res.status(503);
		res.send("This page is under construction");
	} else{
		var service = services[title];
		res.send(service);
	}

});

app.listen(3000, function(){
	console.log("front end server is running on port 3000");
});
