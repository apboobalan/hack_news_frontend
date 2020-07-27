import React from "react";
import { useDispatch } from "react-redux";
import Auth from "../components/Auth";
import { switchAuth, authAction } from "../actions/challengeActions";

const AuthContainer = ({type}) => {
  const dispatch = useDispatch();

  return <Auth type={type} switchAuth={(to) =>dispatch(switchAuth(to))} onClickHandler={(authData) => dispatch(authAction(authData))} />;
};

export default AuthContainer;