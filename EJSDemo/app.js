var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("home"); 
});

app.get("/youfellinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {
            title: "P1",
            author: "A1"
        },
        {   
            title: "P2",
            author: "A2"
        },
        {
            title: "P3",
            author: "A3"
        }
    ]
   res.render("posts", {posts: posts});
});

app.get("*", function(req, res){
    res.send("Failed to load resource: the server responded with a status of 404 (Not Found)");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER RUNNING");
})