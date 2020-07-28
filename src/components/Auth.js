import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import InputWithLabel from "./InputWithLabel";
import AuthInfo from "./AuthInfo";
import { withBorder } from "./styles";

const Auth = ({ type, onClickHandler, switchAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div className={withBorder}>
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
        <AuthInfo instruction="To sign up&nbsp;" onClick={() => switchAuth("SIGN_UP")} />
      ) : (
        <AuthInfo instruction="To sign in &nbsp;" onClick={() => switchAuth("SIGN_IN")} />
      )}
    </div>
  );
};

export default Auth;
