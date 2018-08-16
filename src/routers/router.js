import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, IndexRoute } from 'react-router-dom';

import Loadable from 'react-loadable';

import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

const Loading = function () {
  return <div>Loading...</div>
};

const routers = [
  {
    path: '/page',
    component: Loadable({
      loader: () => import('pages/Page1/page1'),
      loading: Loading,
    })

  }, {
    path: '/counter',
    component: Loadable({
      loader: () => import('pages/Counter/counter'),
      loading: Loading,
    })

  }, {
    path: '/userInfo',
    component: Loadable({
      loader: () => import('pages/UserInfo/userInfo'),
      loading: Loading,
    })
  }
]


class Dashboard extends React.Component {
  render() {
    return <div>Dashboard</div>
  }
}
const getRouter = () => {
  return (
    <Router>
      <LocaleProvider locale={zhCN}>
        <div>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/page">Page1</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/userinfo">UserInfo</Link></li>
          </ul>
          <Switch>
            {
              routers.map(({ path, component }, key) => (
                <Route key={key}
                  path={path}
                  component={component}
                />
              ))
            }
          </Switch>
        </div>
      </LocaleProvider>
    </Router>
  )
}

export default getRouter;