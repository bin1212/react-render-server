var express = require('express')
var app = express();


app.use('/api/getUser',(req, res)=>{
  res.send('ok')
})
app.use('/api/getList',(req, res)=>{
  console.log('request')
  let result = ['w','e','n','b','i','n']
  res.send(result)
})
app.listen(4444,function(){
  console.log('appcation is running in 4444')
})

