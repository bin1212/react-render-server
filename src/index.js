import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {Switch } from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import RouterConfig from "./router";
import {renderRoutes} from 'react-router-config';
import history from './untils/history'
import {getClientStore} from './store'

ReactDOM.hydrate(
  <Provider store={getClientStore()}>
    <ConnectedRouter history={history}>
      <Switch>
        {renderRoutes(RouterConfig)}
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

