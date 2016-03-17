var $ = require('jquery')
var h = require('hyperscript')
var request = require('superagent')

request
  .get("http://localhost:3000/meals")
  .end(function(err,res){
    var meals = res.body
    for (var i = 0; i < meals.length; i++){
      $('#meal-list').append(h(input), meals[i].name, {type: 'checkbox', name: 'meal', value: meals[i].id})
    }
  })
