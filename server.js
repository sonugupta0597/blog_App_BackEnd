const express = require("express");
const body_parser = require("body-parser");
const axios = require('axios')
const json_parser = body_parser.json();
const mongoose = require('mongoose');
const api = express();

api.listen(process.env.PORT||5000);
api.use(json_parser)

mongoose.connect('mongodb://localhost:27017/blogPost', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



const P = new mongoose.Schema({
    post: { type: String },
    count: { type: Number },
    urlToImage: { type: String },
    description: { type: String },
    category: { type: String }
})

const Post = mongoose.model("Post", P);





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
        console.log(req.body.category)
        if (result.length === 0) {
            
            const newPost = new Post({ 'post': req.body.pageTittle, 'count': 1, urlToImage: "" + req.body.urlToImage, description: req.body.description, category: req.body.category })
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

    axios.get("https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=110fae24da114ed8b88a94e945ee8044").then(ress => {

        for (data in ress.data.articles) {
            ress.data.articles[data].category = 'sports'
        }

        res.send(ress.data.articles)
    }).catch(error => {
        console.log(error)

        for (data in sports) {
            sports[data].category = "sports"
            console.log(sports[data])
        }
        res.send(sports)
    })

})

api.get("/entertainment", json_parser, (req, res) => {
    axios.get("https://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey=110fae24da114ed8b88a94e945ee8044").then(ress => {

        for (data in ress.data.articles) {
            ress.data.articles[data].category = 'entertainment'
        }
        res.send(ress.data.articles)
    }).catch(error => {
        console.log(error)

        for (data in entertainment) {
            entertainment[data].category = "entertainment"
            console.log(entertainment[data])
        }
        res.send(entertainment)
    })
})

api.get("/science", json_parser, (req, res) => {
    axios.get("https://newsapi.org/v2/top-headlines?country=de&category=science&apiKey=110fae24da114ed8b88a94e945ee8044").then(ress => {

        for (data in ress.data.articles) {
            ress.data.articles[data].category = 'science'
        }
        res.send(ress.data.articles)
    }).catch(error => {
        console.log(error)

        for (data in science) {
            science[data].category = "science"
            console.log(science[data])
        }
        res.send(science)
    })
})

api.get("/technology", json_parser, (req, res) => {
    axios.get("https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=110fae24da114ed8b88a94e945ee8044").then(ress => {

        for (data in ress.data.articles) {
            ress.data.articles[data].category = 'technology'
        }
        res.send(ress.data.articles)
    }).catch(error => {
        console.log(error)

        for (data in technology) {
            technology[data].category = "technology"
            console.log(technology[data])
        }
        res.send(technology)
    })
})

api.get("/business", json_parser, (req, res) => {

    axios.get("https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=110fae24da114ed8b88a94e945ee8044").then(ress => {

        for (data in ress.data.articles) {
            ress.data.articles[data].category = 'business'
        }

        console.log("dksjdskjdskjskdfjdsk")
        res.send(ress.data.articles)
    }).catch(error => {
        console.log(error)

        for (data in business) {
            business[data].category = "business"
            console.log(business[data])
        }
        res.send(business)
    })
})


api.get("/top_headlines", json_parser, (req, res) => {
    axios.get("http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=110fae24da114ed8b88a94e945ee8044").then(ress => {

        for (data in ress.data.articles) {
            ress.data.articles[data].category = 'top_headlines'
        }

        res.send(ress.data.articles)
    }).catch(error => {
        console.log(error)

        for (data in news) {
            top_headlines[data].category = "top_headlines"
            console.log(top_headlines[data])
        }
        res.send(top_headlines)

    })

})

api.get("/theLatest", json_parser, (req, res) => {
    axios.get("http://newsapi.org/v2/everything?q=tesla&from=2020-12-30&sortBy=publishedAt&apiKey=110fae24da114ed8b88a94e945ee8044").then(ress => {

        for (data in ress.data.articles) {
            ress.data.articles[data].category = 'theLatest'
        }
        console.log(ress.data.articles)
        res.send(ress.data.articles)
    }).catch(error => {
        console.log(error+"jjjjjjjjjjjjjjjjjjj")

        for (data in news) {
            news[data].category = "news"
            console.log(news[data])
        }
        res.send(news)

    })

})


api.get("/news", json_parser, (req, res) => {
    

    for (data in news) {
        news[data].category = "news"
        console.log(news[data])
    }
    res.send(news)

})

api.get("/latestArticles", json_parser, (req, res) => {
    axios.get("http://newsapi.org/v2/everything?q=tesla&from=2020-12-30&sortBy=publishedAt&apiKey=110fae24da114ed8b88a94e945ee8044").then(ress => {

        for (data in ress.data.articles) {
            ress.data.articles[data].category = 'latestArticles'
        }
        res.send(ress.data.articles)
    }).catch(error => {
        console.log(error)

        for (data in news) {
            news[data].category = "news"
            console.log(news[data])
        }
        res.send(news)

    })

})


api.get("/mostLiked", json_parser, (req, res) => {
    Post.find().sort({ count: -1 }).limit(3).exec((err, result) => {
        if (result.length) {
            console.log(result)
            console.log("smnknsakdnsakdsan")
            res.send(result)
        }
        else {

            for (data in news) {
                news[data].category = "news"
                console.log(news[data])
            }
            res.send(news)
        }

    });
})

api.get("/latestStories", json_parser, (req, res) => {
    axios.get("http://newsapi.org/v2/everything?q=tesla&from=2020-12-30&sortBy=publishedAt&apiKey=110fae24da114ed8b88a94e945ee8044").then(ress => {

        for (data in ress.data.articles) {
            ress.data.articles[data].category = 'latestStories'
        }

        res.send(ress.data.articles)
    }).catch(error => {

        console.log(error)

        for (data in news) {
            news[data].category = "news"
            console.log(news[data])
        }
        res.send(news)
    })
})





