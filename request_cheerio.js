var request = require("request");
var cheerio = require("cheerio");

request({
  uri: "http://www.npmjs.org",
}, function(error, response, body) {
  var $ = cheerio.load(body);

  $("#pane-frequently-installed li h3 a").each(function() {
    var link = $(this);
    var text = link.text();

    console.log(text);
  });
});
