import React, { useState } from "react";

const Auth = ({ type, onClickHandler, switchAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="m-3 p-5 rounded border border-gray-400">
      {type === "signIn" ? (
        <div className="font-black p-3">Sign In</div>
      ) : (
        <div className="font-black p-3">Sign Up</div>
      )}
      {type !== "signIn" && (
        <span>
          <label htmlFor="name" className="p-3">
            Name :
          </label>
          <input
            type="text"
            id="name"
            placeholder=" Name"
            data-testid="name"
            onChange={(e) => setName(e.target.value)}
          />
        </span>
      )}
      <label htmlFor="email" className="p-3">
        Email :
      </label>
      <input
        type="email"
        id="email"
        placeholder=" Email"
        data-testid="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password" className="p-3">
        Password :
      </label>
      <input
        type="password"
        id="password"
        placeholder=" Password"
        data-testid="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {type === "signIn" ? (
        <div
          className="bg-black text-white inline-block p-3 rounded hover:bg-white hover:text-black border border-black cursor-pointer"
          data-testid="sign-in-button"
          onClick={() =>
            onClickHandler({ type: "signIn", email: email, password: password })
          }
        >
          SIGN IN &rarr;
        </div>
      ) : (
        <div
          className="bg-black text-white inline-block p-3 rounded hover:bg-white hover:text-black border border-black cursor-pointer"
          data-testid="sign-up-button"
          onClick={() =>
            onClickHandler({
              type: "signUp",
              name: name,
              email: email,
              password: password,
            })
          }
        >
          SIGN UP &rarr;
        </div>
      )}
      {type === "signIn" ? (
        <div className="p-3">
          To sign up&nbsp;
          <div onClick={() => switchAuth("SIGN_UP")} className="underline inline-block cursor-pointer">
            
            click here.
          </div>
        </div>
      ) : (
        <div className="p-3">
          To sign in &nbsp;
          <div onClick={() => switchAuth("SIGN_IN")} className="underline inline-block cursor-pointer">
            
            click here.
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
