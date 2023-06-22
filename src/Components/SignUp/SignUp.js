import React from "react";
import "./SignUP.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import { useState } from "react";
import { useContext } from "react";

const SignUp = () => {
  const { user, createUser, googleSingUp } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confrim = form.confirm.value;
    if (password.length < 6) {
      alert("Password Should be 6 characters or more.");
      return;
    }
    if (password !== confrim) {
      alert("Your password did not match.");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="form-container-singup">
      <h2 className="form-title">Sign Up</h2>
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
          <div className="form-control">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="confirm"
              placeholder="Your Password"
              required
            />
          </div>
        </div>
        <div className="form-info">
          <button className="login-btn" type="submit">
            Sign Up
          </button>
        </div>
      </form>
      <p className="signup">
        Already have an account?
        <Link className="signup-link" to="/login">
          Login
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
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
