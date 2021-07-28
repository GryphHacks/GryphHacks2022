import React from 'react';
import { useHistory } from "react-router-dom";
import firebase from '../../firebase';

const Dashboard = () => {
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

  return (
    <div>
      <div style={{textAlign:'center'}}>
        <h2>Dashboard</h2>
      </div>
      <div className="row box">
        <form onSubmit={(e) => signOutWithFireBase(e)} className="col">
          <button type="submit" className="btn btn-primary">Logout</button>
        </form>
      </div>
    </div>
  )
}

export default Dashboard
