import React, { useState } from "react";

const Auth = ({ type, onClickHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      {type === "signIn" ? <div>Sign In</div> : <div>Sign Up</div>}
      {type !== "signIn" && (
        <span>
          <label htmlFor="name">Name :</label>
          <input type="text" id="name" placeholder=" Name" />{" "}
        </span>
      )}
      <label htmlFor="email">Email :</label>
      <input
        type="email"
        id="email"
        placeholder=" Email"
        data-testid="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password :</label>
      <input
        type="password"
        id="password"
        placeholder=" Password"
        data-testid="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div
        data-testid="sign-in-button"
        onClick={() =>
          onClickHandler({ type: "signIn", email: email, password: password })
        }
      >
        SIGN IN &rarr;
      </div>
    </div>
  );
};

export default Auth;
