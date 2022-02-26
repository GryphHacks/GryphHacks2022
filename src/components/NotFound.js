import React from 'react';
import './stylesheet/notFound.css';
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="errorPage">
      <div className="errorContainer">
        <h1 className="errorTitle blink">404</h1>
        <h2 className="subText">Page not found.</h2>
        <Link to="/">
          <button className='return-home'>Return to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
