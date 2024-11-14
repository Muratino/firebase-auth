import { SignUp } from "components/SignUp";
import React from "react";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <div>
      <h2>Register</h2>
      <SignUp />
      <p>
        Already have an account? <Link to="/login">Sing in</Link>
      </p>
    </div>
  );
};
