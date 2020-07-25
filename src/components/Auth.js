import React from "react";

const Auth = ({ type }) => (
  <div>
    {type === "signIn" ? <div>Sign In</div> : <div>Sign Up</div>}
    {type !== "signIn" && (
      <span>
        <label htmlFor="name">Name :</label>
        <input type="text" id="name" placeholder=" Name" />{" "}
      </span>
    )}
    <label htmlFor="email">Email :</label>
    <input type="email" id="email" placeholder=" Email" />
    <label htmlFor="password">Password :</label>
    <input type="password" id="password" placeholder=" Password" />
  </div>
);

export default Auth;
