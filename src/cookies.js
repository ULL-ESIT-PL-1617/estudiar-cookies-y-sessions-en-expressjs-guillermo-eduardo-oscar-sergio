
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(req, res) {
     res.send("Visit localhost:3000/cookie");
     console.log("Cookies :  ", req.cookies);
});

app.get('/cookie',function(req, res) {
     res.cookie('cookie_name', 'cookie_name').send('Cookie is set');
});

app.get('/clearcookie', function(req,res) {
     clearCookie('cookie_name');
     res.send('Cookie deleted');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
