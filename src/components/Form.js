import React from "react";

export const Form = ({ title, handlClick }) => {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />

      <button onClick={() => handlClick(email, pass)}>{title}</button>
    </div>
  );
};

