import React from 'react';
import Logo from '../stylesheet/logo.png'

class Login extends React.Component {

  render() {
    return (
      <div className="row box">
        <form className="col">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
            <label for="password1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
        <div className="col">
          <div>
            <img src={Logo} class="img-responsive" alt="logo" style={{ marginTop: '-50px' }} />
          </div>
        </div>
      </div>
    );
  }
}



export default Login;