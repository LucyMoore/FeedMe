var express = require('express');
var path = require('path');
var app = express();
var meals = require('./routes/meals')

// Define the port to run on
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'client')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic Meals happens on port ' + port);
});
app.use('/v1/meals', meals)
