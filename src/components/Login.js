import React from "react";

import "./SignUp.css";

const Login = () => {
  return (
    <div className="SignUp">
      <h2>SignUp</h2>
      <form>
        <label>Email:</label>
        <br />
        <input type="email" />

        <br />
        <label>Password:</label>
        <br />
        <input type="password" />
      </form>
      <div className="SignUp-button">
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
