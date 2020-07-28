import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import Auth from "../components/Auth";
import { switchAuth, authAction } from "../actions/challengeActions";

const AuthContainer = ({type}) => {
  const dispatch = useDispatch();

  const switchAuthCallback = useCallback((to) => dispatch(switchAuth(to)),[dispatch])
  const authActionCallback = useCallback((authData) => dispatch(authAction(authData)), [dispatch])

  return <Auth type={type} switchAuth={switchAuthCallback} onClickHandler={authActionCallback} />;
};

export default AuthContainer;