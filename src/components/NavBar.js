import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory,NavLink } from "react-router-dom";
import { logOut } from "../actions/user";
import firebase from "../firebase";
import "./stylesheet/navbar.css";
import "./stylesheet/hamburger.css";


import Logo from "../assets/WhiteNavbarGryph.svg";

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
    <nav className="navbar navbar-expand-lg sticky-top float-right navbar-dark">
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
          className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <div className="navbar-link-box">
              <li className="nav-item-link">
                <NavLink to="/" className="nav-word" activeClassName="underline" exact={true}>
                  Home
                </NavLink>
              </li>
            </div>

            <div className="navbar-link-box">
              <li className="nav-item-link">
                <NavLink to="/about" className="nav-word"  activeClassName="underline">
                  About Us
                </NavLink>
              </li>
            </div>
            <div className="navbar-link-box">
              <li className="nav-item-link">
                <NavLink to="/sponsor" className="nav-word"  activeClassName="underline">
                  Sponsors
                </NavLink>
              </li>
            </div>
            {/* <div className="navbar-link-box">
              <li className="nav-item-link">
                <NavLink to="/schedule" className=" nav-word"  activeClassName="underline">
                  Schedule
                </NavLink>
              </li>
            </div> */}
            {/* <div className="navbar-link-box">
              <li className="nav-item-link">
                <NavLink to="/shop" className=" nav-word"  activeClassName="underline">
                  Shop
                </NavLink>
              </li>
            </div> */}
            <div className="navbar-link-box">
              <li className="nav-item-link">
                <NavLink to="/faq" className="nav-word" activeClassName="underline">
                  FAQ
                </NavLink>
              </li>
            </div>
            <div className="navbar-link-box">
              <li className="nav-item-link">
                <NavLink to="/contact" className="nav-word"  activeClassName="underline">
                  Contact Us
                </NavLink>
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
            {/* {isAuthenticated && (
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => logOutWithFirebase()}
                >
                  Log Out
                </button>
              </li>
            )} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
