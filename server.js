const express = require("express");
const body_parser = require("body-parser");
const axios = require('axios')
const json_parser = body_parser.json();
const mongoose = require('mongoose');
const api = express();

api.listen(3001);
api.use(json_parser)

mongoose.connect('mongodb://localhost:27017/blogPost', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



const P = new mongoose.Schema({
    post: { type: String },
    count: { type: Number },
    urlToImage: { type: String },
    description: { type: String }
})

const Post = mongoose.model("Post", P);



api.post("/", json_parser, (req, res) => {
    console.log(req.body.a)
    res.send("hello Kittu");
});


api.post('/getCount', json_parser, (req, res) => {

    Post.find({ post: req.body.pageTittle }, (err, result) => {

        if (err) {
            console.log(err);
        }
        else {
            if (result.length === 0) {
                res.send("0")
            }
            else {
                res.send("" + (result[0].count))
            }
        }

    })

})

api.post("/getLikeCount/", json_parser, async (req, res) => {

    Post.find({ post: req.body.pageTittle }, (err, result) => {

        if (result.length === 0) {
            console.log(req.body.img)
            const newPost = new Post({ 'post': req.body.pageTittle, 'count': 1, urlToImage: "" + req.body.urlToImage, description: req.body.description })
            newPost.save()
            console.log(result)
        }
        else {

            if (req.body.count === 1) {
                Post.updateMany({ 'post': req.body.pageTittle }, { $inc: { 'count': +1 } }, (errr, updateRows) => {
                    res.send("" + (result[0].count + 1))
                    console.log("aaaaaaaaaa")
                })
            }
            else {
                Post.updateMany({ 'post': req.body.pageTittle }, { $inc: { 'count': -1 } }, (errr, updateRows) => {
                    res.send("" + (result[0].count - 1))
                    console.log('sssssssssss')
                })
            }
        }
    })

});

console.log("Server started");

api.get("/sports", json_parser, (req, res) => {

    axios.get("https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=3613cd48843542b69da9525b1201a4dd").then(ress => {
        res.send(ress.data.articles)
    }).catch(error => {
        console.log(error)
    })

})

api.get("/entertainment", json_parser, (req, res) => {
    axios.get("https://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey=3613cd48843542b69da9525b1201a4dd").then(ress => {
        res.send(ress.data.articles)
    }).catch(error => {
        console.log(error)
    })
})

api.get("/science", json_parser, (req, res) => {
    axios.get("https://newsapi.org/v2/top-headlines?country=de&category=science&apiKey=3613cd48843542b69da9525b1201a4dd").then(ress => {
        res.send(ress.data.articles)
    }).catch(error => {
        console.log(error)
    })
})

api.get("/technology", json_parser, (req, res) => {
    axios.get("https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=3613cd48843542b69da9525b1201a4dd").then(ress => {
        res.send(ress.data.articles)
    }).catch(error => {
        console.log(error)
    })
})

api.get("/business", json_parser, (req, res) => {
    axios.get("https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=3613cd48843542b69da9525b1201a4dd").then(ress => {
        res.send(ress.data.articles)
    }).catch(error => {
        console.log(error)
    })
})


api.get("/top_headlines", json_parser, (req, res) => {
    axios.get("http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3613cd48843542b69da9525b1201a4dd").then(ress => {
        res.send(ress.data.articles)
    }).catch(error => {
        console.log(error)
    })

})

api.get("/theLatest", json_parser, (req, res) => {
    axios.get("http://newsapi.org/v2/everything?q=tesla&from=2020-12-30&sortBy=publishedAt&apiKey=3613cd48843542b69da9525b1201a4dd").then(ress => {
        res.send(ress.data.articles)
    }).catch(error => {
        console.log(error)
    })

})

api.get("/latestArticles", json_parser, (req, res) => {
    axios.get("http://newsapi.org/v2/everything?q=tesla&from=2020-12-30&sortBy=publishedAt&apiKey=3613cd48843542b69da9525b1201a4dd").then(ress => {
        res.send(ress.data.articles)
    }).catch(error => {
        console.log(error)
    })

})


api.get("/mostLiked", json_parser, (req, res) => {
    Post.find().sort({ count: -1 }).limit(3).exec((err, result) => {
        console.log(result)
        console.log("smnknsakdnsakdsan")
        res.send(result)
    });
})

api.get("/latestStories", json_parser, (req, res) => {
    axios.get("http://newsapi.org/v2/everything?q=tesla&from=2020-12-30&sortBy=publishedAt&apiKey=3613cd48843542b69da9525b1201a4dd").then(ress => {
        res.send(ress.data.articles)
    }).catch(error => {
        console.log(error)
    })
})






