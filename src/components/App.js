import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from '../history';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import './stylesheet/app.css';
import "animate.css"

import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute';
import Dashboard from './pages/Dashboard';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Schedule from './pages/Schedule';
import NotFound from './pages/NotFound';
import PasswordReset from './pages/PasswordReset';
import Shop from './pages/Shop';
import About from './pages/About';
import Sponsor from './pages/Sponsor';
import Footer from './GeneralComponents/Footer';
import NavBar from './NavBar';

const App = () => {

  return (
    <div className="page-container">
      <Router history={createBrowserHistory}>
        <ReactNotification />
        <NavBar />
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
            <Route path="/about" exact component={About} />
            <Route path="/sponsor" exact component={Sponsor} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>   
  );
}

export default App;
