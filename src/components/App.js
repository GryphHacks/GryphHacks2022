// Branch - Muhammad testing pull requests
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from '../history';
import './stylesheet/app.css';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css"

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
import Sponsor from './pageComponents/Sponsor';
import Footer from './GeneralComponents/Footer';

const App = () => {

  return (
    <div className="page-container">
      <div className="content-wrap">
        <ReactNotification />
        <Router history={createBrowserHistory}>
        <Navigation />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="/faq" exact component={FAQ} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/schedule" exact component={Schedule} />
            <Route path="/forgotpassword" exact component={PasswordReset} />
            <Route path="/shop" exact component={Shop} />
            <div id = "aboutUsContainer">
            <Route path="/about" exact component={About} />
            </div>
            <Route path="/sponsor" exact component={Sponsor} />
            <Route component={NotFound} />
          </Switch>
        </div>
        </Router>
      </div> 
      <Footer />
    </div>   
  );
}

export default App;