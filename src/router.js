import React from 'react';
import Home from './view/index'
import Login from './view/login/login'
import List from './view/list/list'

const auth = true
const RouterConfig = [
  {
    path: '/',
    exact: true,
    component: Home,
    key:'/'
  },
  {
    path: '/login',
    component: Login,
    key:'/login'
  },
  {
    path: '/list',
    component: List,
    render: auth ? null : () => <div>404</div>,
    key:'/list',
    loadData: List.loadData
  },
];

export default RouterConfig