/*
var spotify = require('spotify');
 
spotify.search({ type: 'track', query: 'I Want it That Way' }, function(err, data) {
    if ( err ) {
        console.log('what’s my age again, by blink 182: ' + err);
        return;
    }
 		var songData = JSON.parse(data);
    console.log('what’s my age again, ' + "data") 
});
*/

module.exports = function(){
var spotify = require('spotify');
 
spotify.search({ type: 'track', query: ' Want it That Way' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    console.log(spotify.track);
});
}