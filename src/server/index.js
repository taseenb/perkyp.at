var express = require('express')
var app = express()

// Arguments from the command line
// var args = process.argv.slice(2);

var indexFile = '/public/index.html'

app.set('port', process.env.PORT || 5000)

app.get('/', function (req, res) {
  res.send('Hello world')
})

app.use(express.static(__dirname + '/public'))

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})
