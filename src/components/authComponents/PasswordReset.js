import firebase from '../../firebase';
import React, { useState } from 'react';

const PasswordReset = () => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false) // This was just so I could toggle message colours

  const sendPasswordResetEmail = (event, email) => {
    event.preventDefault();
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      // Password reset email sent!
      setSuccess(true)
      setMessage('Success! Please check your inbox for a password reset email.');
    })
    .catch((error) => {
      // Catch error and give appropriate error message
      setSuccess(false)
      
      switch (error.code) {
        case "auth/user-not-found":
          setMessage('An account could not be found for the provided email address.');
          break;
        case "auth/invalid-email":
          setMessage('Please enter a valid email address.')
          break; 
        default:
          // What other errors should I be worried about?
          setMessage('An unknown error occurred, please try again.');
      }
    });
  }

  return(
    <div>
      <h3>Forgot your password?</h3>
      <p>Enter your email address below and we'll send you a link to reset your password!</p>
      <form onSubmit={(e) => sendPasswordResetEmail(e, email)}>
        <input 
          type="email"
          placeholder="example@email.com"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">Reset Password</button>
      </form>
      <br/>
      <p style={success ? {color: 'green'} : {color: 'red'}}>{ message }</p>
    </div>
  );
}

export default PasswordReset;