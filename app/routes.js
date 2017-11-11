"use strict";

var bigInt = require("big-integer");
var TwitterCtrl = require('./ctrl/twitter');



module.exports = function(app, twapi) {

  app.get('/api/tweets', function(req, res)
  {
    var twitterCtrl = new TwitterCtrl();

    twitterCtrl.get(req.query.max_id, function(data){
      res.json(data);
    }); 
  });

  app.delete('/api/tweets', function(req, res)
  {
    var twitterCtrl = new TwitterCtrl();
    var tweets = req.query.tweets.split(',');
    twitterCtrl.delete(tweets, function(data){
      res.json(data);
    }); 
  });

};
