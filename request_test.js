var request = require('request');
request('http://www.npmjs.org', function(error, response, body){
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});
