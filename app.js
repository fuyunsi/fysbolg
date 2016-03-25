var express = require("express");
var app = express();

//设置静态目录
app.use(express.static('./public'));

//设置404错误
app.use(function( req, res, next) {
  res.status(404).redirect('./404.html');
});

//设置500错误
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).redirect('./500.html');
});

//设置错误保护
process.on('ncaughtException', function(err){
	console.error(err,stack);
});

//设置服务器
var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('服务器开启成功 at http://%s:%s', host, port);
});