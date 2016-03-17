var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
  fs.readFile('db/db.json', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
    res.json(JSON.parse(data));
  });
});
module.exports = router;
