import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../actions/user';
import firebase from '../firebase';
import createBrowserHistory from '../history';

class Navigation extends React.Component {


  logOutWithFirebase = () => {
    firebase.auth().signOut().then(() => {
      // log out successful
      this.props.logOut();
      console.log('Log out successful.')
      createBrowserHistory.push('/')
    }).catch(function (error) {
      console.log(error)
    });
  }

  renderAuthenticatedLinks() {
    if (this.props.isAuthenticated) {
      return (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/faq' className="nav-link">FAQ</Link>
          </li>
          <li className="nav-item">
            <Link to='/contact' className="nav-link">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link to='/dashboard' className="nav-link">Dashboard</Link>
          </li>
          <li className="nav-item">
            <button className='nav-link' onClick={this.logOutWithFirebase} >Log Out</button>
          </li>
        </ul>
      );
    }
    else {
      return (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/faq' className="nav-link">FAQ</Link>
          </li>
          <li className="nav-item">
            <Link to='/contact' className="nav-link">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link to='/login' className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link to='/register' className="nav-link">Register</Link>
          </li>
        </ul>
      );
    }
  }


  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top float-right">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">GryphHacks</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {this.renderAuthenticatedLinks()}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return { isAuthenticated: state.user.isAuthenticated }
}


export default connect(mapStateToProps, { logOut })(Navigation);
