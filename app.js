var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/about", function(req,res){
    res.render("about");
});

var port = process.env.PORT || 300;

app.listen(port, function(){
    console.log("Deploying Demo App has started")
})