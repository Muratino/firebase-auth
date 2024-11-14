import { Login } from "components/Login";
import React from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div>
      <h2>Login</h2>
      <Login />
      <p>
        Or <Link to="/register">Register</Link>
      </p>
    </div>
  );
};
