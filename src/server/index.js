import render from './render'
import proxy from 'express-http-proxy';
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
let express = require("express");
let app = express();
app.use(cookieParser());
app.use(bodyParser.json());
// app.use(express.static('build'))
app.use('/static', express.static('build/static'))

app.use('/api', proxy('http://127.0.0.1:4444', {
    proxyReqPathResolver(req) {
        return `/api${req.url}`;
    }
}));

app.get('*', (req, res) => {
  render(req, res)  
});
app.listen("3002", function () {
  console.log("app 3002");
});
