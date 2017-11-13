"use strict";

var bigInt = require("big-integer");
var TwitterModel = require('./model/twitter');
var FacebookModel = require('./model/facebook');



module.exports = function(app, twapi) {

  app.get('/api/tweets', function(req, res)
  {
    var twitterModel = new TwitterModel();

    twitterModel.get(req.query.max_id, function(data){
      res.json(data);
    }); 
  });

  app.delete('/api/tweets', function(req, res)
  {
    var twitterModel = new TwitterModel();
    var tweets = req.query.tweets.split(',');
    twitterModel.delete(tweets, function(data){
      res.json(data);
    }); 
  });

  app.get('/api/facebook', function(req, res)
  {
    var facebookModel = new FacebookModel();

    facebookModel.get(req.query.max_id, function(data){
      res.json(data);
    }); 
  });

  app.delete('/api/facebook', function(req, res)
  {
    var facebookModel = new FacebookModel();
    var posts = req.query.posts.split(',');
    facebookModel.delete(posts, function(data){
      res.json(data);
    }); 
  });

};
