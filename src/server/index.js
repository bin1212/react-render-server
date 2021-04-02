import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from '../view/index'


let express = require('express')
let app = express()
app.use(express.static('build'))
app.get('/', function (req, res) {
    let html = renderToString(<Home/>)
    res.send(
        `
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                name="description"
                content="Web site created using create-react-app"
                />
                <title>React asaqwqqsaApp</title>
            </head>
            <body>
                <div id="root">${html}121212</div>
            </body>
        </html>

        `
    )
})

app.listen('3002',function(){
    console.log('app')
})