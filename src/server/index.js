import render from './render'
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
let express = require("express");
let app = express();
app.use(cookieParser());
app.use(bodyParser.json());
// app.use(express.static('build'))
app.use('/static', express.static('build/static'))

app.get('*', (req, res) => {
  render(req, res)  
});
app.listen("3002", function () {
  console.log("app 3002");
});
