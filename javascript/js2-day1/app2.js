var express = require('express');
var app = express();
var ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  data = {
    properties: properties,
    pageTitle: 'Properties index!'
  }

  res.render('index', {data: data})
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});

console.log('hi there');

var properties = [
  {
    ownerName: "Allie Daudt",
    address: "123 Main St"
  },
  {
    ownerName: "Bob Johnson",
    address: "12 Three St"
  },
  {
    ownerName: "Mary Smith",
    address: "500 1st Ave"
  }
];

console.log(properties[0].ownerName);
console.log(properties);
