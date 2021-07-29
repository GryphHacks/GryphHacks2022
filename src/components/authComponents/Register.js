import React, { useState } from 'react';
import Logo from '../stylesheet/logo.png'
import firebaseApp from '../../firebase';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addUser } from '../../actions/user';

const Register = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const createUser = (event, email, password) => {
    console.log("here");
    event.preventDefault();
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log(userCredential);
        userCredential.user.updateProfile({
          displayName: displayName
        }).then(() => {
          dispatch(addUser(userCredential.user));
        });
        history.push('/dashboard');
        firebaseApp.firestore().collection("Users").doc(firebaseApp.auth().currentUser.uid)
          .set({ displayName, email })
            .then(() => {
              // registration successful
              console.log("New user added to database");
            })
            .catch(error => {
              console.log("Error writing to database: ", error);
            })
      })
      .catch(error => {
        console.log(error);
        //Alert error if passwords no not match
        if (password !== confirmPassword) {
          alert("Passwords do not match");
        }
      });
  }

  return (
    <div className="row box">
      <form className="col" onSubmit={(e) => createUser(e, email, password)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input
            name="name"
            value={displayName}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={e => setDisplayName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input
            name="email"
            value={email}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password1" className="form-label">Password</label>
          <input
            name="password"
            value={password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password2" className="form-label">Confirm password</label>
          <input
            name="confirmPassword"
            value={confirmPassword}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Join Us!</button>
      </form>
      <div className="col">
        <div>
          <img src={Logo} className="img-responsive" alt="logo" style={{ marginTop: '-50px' }} />
        </div>
      </div>
    </div>
  );
}

export default Register;