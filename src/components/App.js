import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from '../history';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import './stylesheet/app.css';
import "animate.css"

import Landing from './home/Landing';
import Register from './dashboard/Register';
import Login from './dashboard/Login';
import PrivateRoute from './PrivateRoute';
import Dashboard from './dashboard/Dashboard';
import FAQ from './faq/FAQ';
import Contact from './contact/Contact';
import Schedule from './schedule/Schedule';
import NotFound from './NotFound';
import PasswordReset from './dashboard/PasswordReset';
import Shop from './shop/Shop';
import About from './about/About';
import Sponsor from './sponsors/Sponsor';
import Footer from './footer/Footer';
import NavBar from './NavBar';
import ScrollToTop from './ScrollToTop'

const App = () => {

  return (
    <div className="page-container">
      <Router history={createBrowserHistory}>
      <ScrollToTop/>
        <ReactNotification />
        <NavBar />
        <div className="content">
          <a id="mlh-trust-badge" href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=white" target="_blank">
            <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-yellow.svg" alt="Major League Hacking 2022 Hackathon Season"/>
          </a>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/about" exact component={About} />
            <Route path="/sponsor" exact component={Sponsor} />
            {/* <Route path="/schedule" exact component={Schedule} /> */}
            <Route path="/faq" exact component={FAQ} />
            <Route path="/contact" exact component={Contact} />
            {/* <Route path="/register" exact component={Register} /> */}
            {/* <Route path="/login" exact component={Login} /> */}
            {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
            {/* <Route path="/forgotpassword" exact component={PasswordReset} /> */}
            {/* <Route path="/shop" exact component={Shop} /> */}
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>   
  );
}

export default App;
