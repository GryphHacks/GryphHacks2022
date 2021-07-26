import React, { useState } from 'react';
import Logo from '../stylesheet/logo.png'
import firebaseApp from '../../firebase';

const Register = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const createUser = (event, email, password) => {
    console.log("here");
    event.preventDefault();
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log(userCredential);
        firebaseApp.firestore().collection("Users").doc(firebaseApp.auth().currentUser.uid)
          .set({ displayName, email })
            .then(() => {
              console.log("New user added to database");
            })
            .catch(error => {
              console.log("Error writing to database: ", error);
            })
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className="row box">
      <form className="col" onSubmit={(e) => createUser(e, email, password)}>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
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
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
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
        <div class="mb-3">
          <label for="password1" class="form-label">Password</label>
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
          <label for="password2" class="form-label">Confirm password</label>
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