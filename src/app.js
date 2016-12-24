var express = require("express");
var services = require("./mock/services.json");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "jade");
app.set("views", __dirname + "/views");

app.get("/", function(req, res){
	res.send("/public/index.html");

});

app.get("/services/:title?", function(req, res){
	var title = req.params.title;

	if (title === undefined) {
		res.status(503);
		res.send("This page is under construction");
	} else{
		var service = services[title];
		res.render("service", {service: service});
	}

});

app.listen(PORT, function(){
	console.log("front end server is running on " + PORT);
});
