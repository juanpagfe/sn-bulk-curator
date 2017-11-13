"use strict";

const fbapi = require('fb')
fbapi.options({version: 'v2.4'})
fbapi.extend({appId: process.env.FB_APP_ID, appSecret: process.env.FB_APP_SECRET});

const Facebook = function(){};

Facebook.prototype.get = function(max_id, callback){
    fbapi.setAccessToken(process.env.FB_ACCESS_TOKEN)
    var props = { fields: ['id', 'description', 'caption','story', 'created_time', 'link', 'message', 'name', 'object_id', 'permalink_url'] };
    
    if (max_id) { props.max_id = max_id; }

    const facebookCallback = (data) => {
        if (data.length === 1) {
            data = [];
        }
        callback(data);
    };

    fbapi.api(process.env.FB_PAGE_ID+'/feed', props, facebookCallback);
}

Facebook.prototype.delete = function(posts, callback)
{
    fbapi.setAccessToken(process.env.FB_PAGE_TOKEN)
    const len = posts.length;
    const last = len - 1;

    console.log(`Deleting ${len} posts.`);

    posts.forEach( (post,index) => {
        
        console.log(`Deleting ${post}`);

        fbapi.api(post, 'delete', function (data)  {
            if (index === last) {
              callback(data);
          }
      });
    });
}

module.exports = Facebook