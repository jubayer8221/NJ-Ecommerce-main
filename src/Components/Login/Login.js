import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGolfBall } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";

const Login = () => {
  const { createInSign, googleSingUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createInSign(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-info">
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="form-info">
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              required
            />
          </div>
        </div>
        <div className="form-info">
          <button className="login-btn" type="submit">
            Login
          </button>
        </div>
      </form>
      <p className="signup">
        New to Ema-john?
        <Link className="signup-link" to="/signup">
          Create New Account
        </Link>
      </p>
      <div className="line_or">
        <div className="line">
          <hr />
        </div>
        <small>or</small>
        <div className="line">
          <hr />
        </div>
      </div>
      <div className="form-info">
        <button onClick={googleSingUp} className="google-btn">
          <FontAwesomeIcon icon={faGolfBall}></FontAwesomeIcon> Continue With
          Google
        </button>
      </div>
    </div>
  );
};

export default Login;
