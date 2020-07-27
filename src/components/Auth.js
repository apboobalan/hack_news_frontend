import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import InputWithLabel from "./InputWithLabel";

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
        <InputWithLabel
        id="name"
        label="Name :"
        type="text"
        placeholder=" Email"
        testId="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      )}
      <InputWithLabel
        id="email"
        label="Email :"
        type="email"
        placeholder=" Email"
        testId="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputWithLabel
        id="password"
        label="Password :"
        type="password"
        placeholder=" Passowrd"
        testId="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {type === "signIn" ? (
        <SubmitButton
          testId="sign-in-button"
          onClickHandler={() =>
            onClickHandler({ type: "signIn", email: email, password: password })
          }
        >
          SIGN IN &rarr;
        </SubmitButton>
      ) : (
        <SubmitButton
          testId="sign-up-button"
          onClickHandler={() =>
            onClickHandler({
              type: "signUp",
              name: name,
              email: email,
              password: password,
            })
          }
        >
          SIGN UP &rarr;
        </SubmitButton>
      )}
      {type === "signIn" ? (
        <div className="p-3">
          To sign up&nbsp;
          <div
            onClick={() => switchAuth("SIGN_UP")}
            className="underline inline-block cursor-pointer"
          >
            click here.
          </div>
        </div>
      ) : (
        <div className="p-3">
          To sign in &nbsp;
          <div
            onClick={() => switchAuth("SIGN_IN")}
            className="underline inline-block cursor-pointer"
          >
            click here.
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
