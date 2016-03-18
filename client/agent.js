request = require('superagent')

request.post('http://localhost:3000/v1/meals/new')
        .send({})
        .end(function (erre, res) {
          console.log(res)
        })
