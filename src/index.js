var $ = require('jquery')
var h = require('hyperscript')
var request = require('superagent')

request
  .get("http://localhost:3000/v1/meals")
  .end(function(err,res){
    var meals = res.body
    console.log(meals, " yip", typeof meals)
    $('#meals').append(h('p', {}, meals.meals[0].name))
    for (var i = 0; i < meals.length; i++){
      $('#meal-list').append(h('input', {type: 'checkbox', name: 'meal', value: meals.meals[i].id}, meals.meals[i].name))
    }
  })
