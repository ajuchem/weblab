var express = require('express');
var app = express();

// set public static files
app.use(express.static('public'));

// return an index.html file when the default route is requested
app.get('/', function(req,res) {
  res.sendfile('index.html');
});

// add another route
app.get('/about', function(req,res) {
  res.sendfile('about.html');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000.');
});
