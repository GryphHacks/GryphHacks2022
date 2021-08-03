import firebase from '../../firebase';
import React, { useState } from 'react';

const PasswordReset = () => {

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const sendPasswordResetEmail = (event, email) => {
    event.preventDefault();
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      // Password reset email sent!
      setSubmitted(true)
    })
    .catch((error) => {
      // TODO - add 
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  }

  return(
    <div>
      <h3>Forgot your password?</h3>
      <p>Enter your email address below and we'll send you a link to reset your password!</p>
      <form onSubmit={(e) => sendPasswordResetEmail(e, email)}>
        <label>Email Address</label>
        <input 
          type="email"
          placeholder="example@email.com"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">Reset Password</button>
      </form>
      <br/>
      {submitted && <div style={{color:'green'}}>Success! Please check your inbox for a password reset email.</div>}
      {!submitted && <div style={{color:'red'}}>An account could not be found for the provided email address.</div>}
    </div>
  );
}

export default PasswordReset;