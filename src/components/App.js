// Branch - Muhammad testing pull requests
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from '../history';
import './stylesheet/app.css';

import Landing from './pageComponents/Landing';
import Navigation from './Navigation';
import Register from './authComponents/Register';
import Login from './authComponents/Login';
import PrivateRoute from './authComponents/PrivateRoute';
import Dashboard from './userComponents/Dashboard';
import FAQ from './pageComponents/FAQ';
import Contact from './pageComponents/Contact';
import Schedule from './pageComponents/Schedule';
import NotFound from './pageComponents/NotFound';
import PasswordReset from './authComponents/PasswordReset';
import Shop from './pageComponents/Shop';
import About from './pageComponents/About';

const App = () => {

  return (
    <div>
      <Router history={createBrowserHistory}>
        <Navigation />
        <div className="container" style={{marginTop: '100px'}}>
          <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/register' exact component={Register} />
            <Route path='/login' exact component={Login} />
            <PrivateRoute path='/dashboard' component={Dashboard}/>
            <Route path='/faq' exact component={FAQ} />
            <Route path='/contact' exact component={Contact}/>
            <Route path='/schedule' exact component={Schedule}/>
            <Route path='/forgotpassword' exact component={PasswordReset}/>
            <Route path='/shop' exact component={Shop}/>
            <Route path='/about' exact component={About}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;