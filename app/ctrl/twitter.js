"use strict";

const TwitterAPI = require('twit')

const twapi = new TwitterAPI({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret:  process.env.ACCESS_TOKEN_SECRET
});

const Twitter = function(){};

Twitter.prototype.get = function(max_id, callback){
    var props = {
        screen_name: process.env.TWITTER_USERNAME,
        count: 100,
        include_rts: 1
    };

    if (max_id) { props.max_id = max_id; }

    const twitterCallback = (err, data, response) => {
        if (data.length === 1) {
            data = [];
        }
        callback(data);
    };
    console.log(twapi);

    twapi.get('statuses/user_timeline', props, twitterCallback);
}

Twitter.prototype.delete = function(tweets, callback){
    const len = tweets.length;
    const last = len - 1;

    console.log(`Deleting ${len} tweets.`);

    tweets.forEach( (twid,index) => {
      console.log(`Deleting ${twid}`);
      twapi.post(`statuses/destroy/${twid}`, { trim_user: true }, (err, data, response) => {
        if (index === last) {
          callback(data);
        }
      });
    });
}

module.exports = Twitter