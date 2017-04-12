var express = require('express');
var app = express();
var dirname = "/home/ubuntu/workspace/assessment_workspace/public";


app.use(express.static(dirname));
app.get('/', function (req, res) {
  res.sendFile(dirname + "index.html");
})


app.listen(8080, function () {
  console.log('App listening on port 8080!')
})