import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import routes from "../router";
import { renderRoutes, matchRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { getServerStore, sagaMiddleware } from "../store/index";
import rootSaga from "../store/sagas";

const path = require("path");
const fs = require("fs");

export default function render(req, res) {
  const context = { name: "wenbin" };
  let store = getServerStore(req);
  sagaMiddleware.run(rootSaga);

  let matchedRoutes = matchRoutes(routes, req.path);

  let promises = [];
  // 当前匹配到的路由如果需要异步请求数据，那么就在这里请求数据
  matchedRoutes.forEach((item, index) => {
    if (item.route.loadData) {
      promises.push(
        new Promise(function (resolve) {
          item.route.loadData(store).then(resolve, resolve);
        })
      );
    }
  });
  Promise.all(promises).then(function (proData) {
    const app = renderToString(
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    );
    const indexFile = path.resolve(`./build/index.html`);
    fs.readFile(indexFile, "utf8", (err, data) => {
      if (err) {
        console.error("Something went wrong:", err);
        return res.status(500).send("Oops, better luck next time!");
      }
      let renderData = data.replace(
        '<div id="root"></div>',
        `<div id="root">${app}</div> 
               <script>
                  window.context = {
                      state:${JSON.stringify(store.getState())}
                  }
                </script>`
      );
      return res.send(renderData);
    });
  });
}
