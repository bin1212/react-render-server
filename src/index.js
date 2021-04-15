import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {Switch } from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import RouterConfig from "./router";
import {renderRoutes} from 'react-router-config';
import history from './utils/history'
import {getClientStore,sagaMiddleware} from './store'
import rootSaga from './store/sagas'

let store = getClientStore()
sagaMiddleware.run(rootSaga,'/aaaa')
ReactDOM.hydrate(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        {renderRoutes(RouterConfig)}
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

