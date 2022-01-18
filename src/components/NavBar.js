import {useSelector, useDispatch} from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { logOut } from '../actions/user';
import firebase from '../firebase';
import './navbar.css'

import Logo from '../assets/WhiteNavbarGryphon.png';

const NavBar = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated );
  const dispatch = useDispatch();
  const history = useHistory();

  const logOutWithFirebase = () => {
      firebase.auth().signOut().then(function() {
        // log out successful
        dispatch(logOut());
        console.log('Log out successful.')
        history.push('/')
      }).catch(function(error) {
        console.log(error)
      }); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top float-right">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">
          <img src={Logo} className="img-responsive" width="60px" alt="logo" style={{ marginLeft: '20px' }}/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul id="bootstrap-override" className="navbar-nav ms-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <Link to="/" className=" nav-style nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/about' className="nav-link">About Us</Link>
            </li>
            <li className = "nav-item">
               <Link to ='/sponsor' className="nav-link">Sponsor</Link> 
            </li>
            <li className="nav-item">
              <Link to='/schedule' className="nav-link">Schedule</Link>
            </li>
            <li className="nav-item">
              <Link to='/shop' className="nav-link">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to='/faq' className="nav-link">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link to='/contact' className="nav-link">Contact Us</Link>
            </li>
            { !isAuthenticated &&
            <li className="nav-item">
              <Link to='/login' className="nav-link">Login</Link>
            </li>
            }
            { !isAuthenticated &&
            <li className="nav-item">
              <Link to='/register' className="nav-link">Register</Link>
            </li>
            }
            { isAuthenticated &&
              <li className="nav-item">
                <Link to='/dashboard' className="nav-link">Dashboard</Link>
              </li>
            }
            { isAuthenticated &&
              <li className="nav-item">
                <button className='nav-link' onClick={() => logOutWithFirebase()}>Log Out</button>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
