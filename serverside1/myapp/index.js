// using express makes setting up the server easier since it has many shorcut methods
var express = require('express');
// body-parser allow us to easily capture form values when receiving a request
// assign it to the var bodyParser
var bodyParser = require('body-parser');

var app = express();

// create a global array of simple json objects
// by making this global multiple methods can access or modify the array
global.reasons = [
  {reason: 'My mom loves me'}
];

// we are using the EJS templating engine to build the pages before sending it back to the browser
app.set('view engine', 'ejs');

// set public static files
app.use(express.static('public'));
// tell the app to use bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// index page
// this is our default route, it has a small array of json objects defined in it
app.get('/', function(req,res) {
  var friends = [
    {name: 'Chanandler Bong'},
    {name: 'Rachel Green'},
    {name: 'Ross Geller'},
    {name: 'Joey Tribbiani'},
    {name: 'Monica Geller'},
    {name: 'Phoebe Buffay'}
  ]

  // a simple string to act as another piece of data
  var tagline = "Of course, there they just call it food.";

  // calling the render method and passing in an object containing our array and string
  res.render('pages/index', {
    friends: friends,
    tagline: tagline
  })
})

// building another route, it accepts requests using a 'GET'method
app.get('/about', function(req,res) {
  // calling our render method but passing in an object containing our global array
  res.render('pages/about', {
    reasons: global.reasons
  })
})

// accept input from the about form
// this route, while having the same path as the route above, will only accept a 'POST' request method
// this is great for receiving a submission from a form
app.post('/about', function(req,res) {
  console.log(req.body.myReason);
  // create a simple object that contains both a property 'reason' and the value  from the form
  var theReason = {
    reason: req.body.myReason
  }
  // use the array.push method to add the new object 'theReason' to the existing global array 'reasons'
  global.reasons.push(theReason);
  console.log(global.reasons);
  // render the 'about' page again & pass in the updated 'reasons' array
  res.render('pages/about', {
    reasons: global.reasons
  })
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000.');
})

// CODE FROM PREVIOUS CLASS

// return an index.html file when the default route is requested
// app.get('/', function(req,res) {
//   res.sendfile('index.html');
// });

// use res.render to load an ejs view file

// add another route
// app.get('/about', function(req,res) {
//   res.sendfile('about.html');
// });

// input form
// app.get('/contact', function(req,res) {
//   res.sendfile('/pages/contact.html')
// });

// form submission
// app.post('/contact', function(req,res) {
//
// })
