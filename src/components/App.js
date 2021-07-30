// Branch - Muhammad testing pull requests
import React from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from '../history';
import './stylesheet/app.css';

import Landing from './Landing';
import Navigation from './Navigation';
import Register from './authComponents/Register';
import Login from './authComponents/Login';
import Dashboard from './userComponents/Dashboard';
import FAQ from './userComponents/FAQ';
import Contact from './userComponents/Contact';

const App = () => {

  return (
    <div>
      <Router history={createBrowserHistory}>
        <Navigation />
        <Route path='/' exact component={Landing} />
        <div className="container" style={{marginTop: '400px'}}>
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
          <Route path='/dashboard' exact component={Dashboard}/>
          <Route path='/faq' exact component={FAQ} />
          <Route path='/contact' exact component={Contact}/>
        </div>
      </Router>
    </div>
  )
}

export default App;