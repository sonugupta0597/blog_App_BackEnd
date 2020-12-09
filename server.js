const express = require("express");
const body_parser = require("body-parser");
const sports = require("./sports");
const bollybood = require("./bollybood");
const news = require("./news");
const education = require("./education");
const mimes = require("./mimes");
const recentPost = require("./recentPost");
const latest = require("./latest");
const mostLiked = require("./mostLiked");
const LatestStories = require("./latestStories");

const json_parser = body_parser.json();

const api = express();

api.listen(3001);

api.get("/",(req,res)=>{
    res.send("hello Kittu");
});

console.log("Server started");

api.get("/sports",json_parser,(req,res)=>{
      
    res.send(sports);
    
})

api.get("/bollybood",json_parser,(req,res)=>{      

            res.send(bollybood);

})

api.get("/mimes",json_parser,(req,res)=>{
            res.send(mimes);
})

api.get("/news",json_parser,(req,res)=>{
            res.send(news);
})


api.get("/education",json_parser,(req,res)=>{
            res.send(education);
})

api.get("/main",json_parser,(req,res)=>{
    res.send(recentPost);
})

api.get("/latest",json_parser,(req,res)=>{
    res.send(latest);
})

api.get("/mostLiked",json_parser,(req,res)=>{
    res.send(mostLiked);
})

api.get("/latestStorieS",json_parser,(req,res)=>{
    res.send(LatestStories);
})