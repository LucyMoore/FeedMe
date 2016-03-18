var $ = require('jquery')
var h = require('hyperscript')
var request = require('superagent')
    var addArray = []

  $(document).ready(function(){

request
  .get("http://localhost:3000/v1/meals")
  .end(function(err,res){
    var meals = res.body
    //console.log(meals, " yip", typeof meals)

    for (var i = 0; i < meals.meals.length; i++){
      console.log(i)
      $('#meal-list').append(h('input', {type: 'checkbox', name: 'meal', id: meals.meals[i].id})).append(meals.meals[i].name+'<br>')
    }
  })

  $('#meal-list').click('input[type=checkbox]', function(e){

    console.log("clicked check")

    //when clicked get the ticked items
    if($(e.target).is(':checked')){
      //addToList(e.target.id)
      getIngred(e.target.id)

    }
    //append theirt ingredients to the shopping list
  })

  // function addToList(id){
  //   addArray.push(id)
  //     console.log(addArray)

  // }
//})
  function getIngred(id){
    request

      .get("http://localhost:3000/v1/meals/"+id)
      .end(function(err,res){
        console.log(res.body)
      })
  }
})
