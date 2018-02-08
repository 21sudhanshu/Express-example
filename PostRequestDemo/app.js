var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = ["st", "sag", "dhruv", "shub", "shone"];

app.get("/", function(req, res){
   res.render("home"); 
});

"/friends"
app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

app.post("/addFriend", function(req, res){
    var friend = req.body.friend ;
    friends.push(friend);
   res.redirect("/friends");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server running...");
});