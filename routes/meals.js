var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
  fs.readFile('db/db.json', 'utf8', function(err, data) {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

router.post('/new', function(req, res, next) {
  fs.readFile('db/db.json','utf8', function(err, data){
    meals = JSON.parse(data)
    var newMeals = req.body

  var data = {
    "name": "toastie-pie",
    "ingredients": {
      "bread": 2,
      "cheese": 1,
      "butter": 1,
      "onion": 1
    }
  }
  newMeals["Id"] = meals.meals.length+1
  meals.meals.push(newMeals)
  fs.writeFile('db/db.json', JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log("Food Food Glorious Food", data);
    res.json(data);
  });
});

module.exports = router;
