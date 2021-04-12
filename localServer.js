var express = require('express')
var app = express();
var history = require('connect-history-api-fallback');
app.use(history())      // 这里千万要注意，要在static静态资源上面
 
app.use(express.static('build'));
 
app.listen(3333,function(){
  console.log('appcation is running in 3333')
})
