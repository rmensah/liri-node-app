module.exports = function(){
	var movieType = process.argv[2];
	var request = require('request');
			request('http://www.omdbapi.com/?t="+ movieType + "&y=&plot=short&r=json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(JSON.parse(body)); 
  }
})
};
