import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleBar from "../components/TitleBar";
import {
  navigateToChallengeList,
  signOutAction,
  navigateToCreateChallengeAction,
} from "../actions/titleBarActions";

const TitleBarContainer = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.userReducer.name);

  const onClickHandler = useCallback(() => dispatch(navigateToChallengeList()), [
    dispatch,
  ]);
  const signOut = useCallback(() => dispatch(signOutAction()), [dispatch]);
  const navigateToCreateChallenge = useCallback(() => dispatch(navigateToCreateChallengeAction()), [
    dispatch,
  ]);
  return (
    <TitleBar
      onClickHandler={onClickHandler}
      name={name}
      onSignOut={signOut}
      onNavigateToCreateChallenge={navigateToCreateChallenge}
    />
  );
};

export default TitleBarContainer;
