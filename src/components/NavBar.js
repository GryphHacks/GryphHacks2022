import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logOut } from "../actions/user";
import firebase from "../firebase";
import "./stylesheet/navbar.css";

import Logo from "../assets/WhiteNavbarGryphon.png";

const NavBar = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const history = useHistory();

  const logOutWithFirebase = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // log out successful
        dispatch(logOut());
        console.log("Log out successful.");
        history.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top float-right">
      <div className="container-fluid">
        <div className="logo-div-navbar">
          <Link to="/" >
            <img
              src={Logo}
              className="navbar-logo"
              width="60px"
              alt="logo"
            />
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <div className="navbar-link-box">
              <li className="nav-item-link">
                <Link to="/" className=" nav-word">
                  Home
                </Link>
              </li>
            </div>

            <div className="navbar-link-box">
              <li className="nav-item-link">
                <Link to="/about" className=" nav-word">
                  About Us
                </Link>
              </li>
            </div>
            <div className="navbar-link-box">
              <li className="nav-item-link">
                <Link to="/sponsor" className=" nav-word">
                  Sponsors
                </Link>
              </li>
            </div>
            <div className="navbar-link-box">
              <li className="nav-item-link">
                <Link to="/schedule" className=" nav-word">
                  Schedule
                </Link>
              </li>
            </div>
            <div className="navbar-link-box">
              <li className="nav-item-link">
                <Link to="/shop" className=" nav-word">
                  Shop
                </Link>
              </li>
            </div>
            <div className="navbar-link-box">
              <li className="nav-item-link">
                <Link to="/faq" className=" nav-word">
                  FAQ
                </Link>
              </li>
            </div>
            <div className="navbar-link-box">
              <li className="nav-item-link">
                <Link to="/contact" className=" nav-word">
                  Contact Us
                </Link>
              </li>
            </div>

            {/* {!isAuthenticated && (
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            )}
            {!isAuthenticated && (
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>
            )} */}
            {isAuthenticated && (
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => logOutWithFirebase()}
                >
                  Log Out
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
