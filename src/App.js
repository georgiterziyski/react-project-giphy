import React from 'react';
import Header from './components/header/Header'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Profile from './pages/Profile'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

const Layout = props => (
  <>
    <Header />
    <div className="container mt-5">
      {props.children}
    </div>
  </>
)

const routes =[
  {
    path: '/',
    exact: true,
    main: () => <Layout>
      <Home />
    </Layout>
  },
  {
    path: '/favourites',
    exact: false,
    main: () => <Layout>
      <Favourites />
    </Layout>
  },
  {
    path: '/profile',
    exact: false,
    main: () => <Layout>
      <Profile />
    </Layout>
  },
]

const getRoutes = () => {
  return routes.map((route, index) => {
    return <Route
      exact={route.exact}
      key={index}
      path={route.path}>
      {route.main}
    </Route>
  })
}

function App() {
  return  <Provider store={store}>
            <Router>
              <Switch>
                {getRoutes()}
              </Switch>
            </Router>
          </Provider>
}

export default App;
