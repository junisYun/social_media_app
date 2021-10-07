import React from 'react';
import { useHistory } from 'react-router-dom';
import './login.css';

const Login = () => {
  const history = useHistory();

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">RattaSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around tou on RattaSocial
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="email" placeholder="Email" className="loginInput" />
            <input
              type="password"
              placeholder="password"
              className="loginInput"
            />
            <button
              className="loginButton"
              onClick={() => {
                history.push('social_media_app/home');
              }}
            >
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
