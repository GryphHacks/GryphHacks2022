import React from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import firebase from '../../firebase';

const Dashboard = () => {
  const name = useSelector(state => state.user.name);
  const history = useHistory();

  const signOutWithFireBase = (e) => {
    e.preventDefault();
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      console.log('Log out successful.')
      history.push('/')
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }

  return(
    <div>
      <h1 style={{textAlign:'center'}}>
        {name}
      </h1>
      <div className="row box">
        <form onSubmit={(e) => signOutWithFireBase(e)} className="col">
          <button type="submit" className="btn btn-primary">Logout</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard
