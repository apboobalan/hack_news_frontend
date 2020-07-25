import React from "react";

const Auth = () => (
  <div>
    <div>Sign Up</div>
    <label htmlFor="name">Name :</label>
    <input type="text" id="name" placeholder=" Name" />
    <label htmlFor="email">Email :</label>
    <input type="email" id="email" placeholder=" Email" />
    <label htmlFor="password">Password :</label>
    <input type="password" id="password" placeholder=" Password" />
  </div>
);

export default Auth;
