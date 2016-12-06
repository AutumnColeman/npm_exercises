var fs = require('fs');
var marked = require(
  'marked'
);

var input = process.argv[2];
var output = process.argv[3];

fs.readFile(input, function(err, buffer) {
  if(err) {
    console.log('Something went wrong because', err.message);
    return;
  }
  var contents = buffer.toString();
  fs.writeFileSync(output, marked(contents));
  if (err) {
    console.log('Something went wrong because', err.message);
    return;
  }
});
