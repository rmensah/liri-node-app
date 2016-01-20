var prompt = require('prompt');
var spotifyThisSong = require('./spotify-this-song.js');
var movieThis = require('./movie-this.js');
var twitter = require('twitter');
var client = require('./keys.js');
var tweetsApi = 'https://api.twitter.com/1.1/statuses/retweets_of_me.json';

function myTweets(){
	client.getReTweetsOfMe('tweetsApi', function(error, tweets, response){
  if(error) throw error;
  console.log(tweets);  
  console.log(response);  
});
};



    

/*
var Twitter = require('twitter');

    //Get this data from your twitter apps dashboard
		twitterKeys = require('./keys.js');
    }

    var Twitter = new Twitter(twitterKeys);

    //Example calls

    twitter.getUserTimeline({ screen_name: 'richiemens', count: '10'}, error, success);

    twitter.getMentionsTimeline({ count: '10'}, error, success);

    twitter.getHomeTimeline({ count: '10'}, error, success);

    twitter.getReTweetsOfMe({ count: '10'}, error, success);

    twitter.getTweet({ id: '1111111111'}, error, success);

*/