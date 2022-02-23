import React from 'react';
import './stylesheet/notFound.css';
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="errorPage">
      <div className="errorContainer">
        <h1 className="errorTitle"><span className="blink4">4</span>04</h1>
        <h2 className="subText">Page not found.</h2>
        <Link to="/"><button id="hackie">Home</button></Link>
      </div>
    </div>
  );
};

export default NotFound;
