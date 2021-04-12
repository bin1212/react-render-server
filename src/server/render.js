import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import routes from '../router';
import {renderRoutes, matchRoutes} from 'react-router-config';
import {Provider} from 'react-redux';
import {getServerStore} from '../store/index'
const path = require("path");
const fs = require("fs");

export default function render(req, res){
    const context = {name:"wenbin"};
    let store = getServerStore(req);
    const app = renderToString(
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    );
  console.log(context,'context')
    const indexFile = path.resolve(`./build/index.html`);
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
      let renderData =  data.replace('<div id="root"></div>',
             `<div id="root">${app}</div> 
             <script>
                window.context = {
                    state:${JSON.stringify(store.getState())}
                }
              </script>`)
      return res.send(
        renderData
      );
    });
}