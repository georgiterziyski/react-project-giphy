import React from 'react';
import Header from './components/header/Header'
import Home from './pages/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
//import reducers from "./redux/reducers";
import thunk from 'redux-thunk';

//const store = createStore(reducers, applyMiddleware(thunk));

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
    path: '/',
    exact: true,
    main: () => <Layout>
      <Home />
    </Layout>
  }
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
  return <Router>
    <Switch>
      {getRoutes()}
    </Switch>
  </Router>
}

export default App;
