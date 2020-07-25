import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import TitleBar from "../components/TitleBar";
import { navigateToChallengeList } from "../actions/challengeActions";

const TitleBarContainer = () => {
  const dispatch = useDispatch();

  const onClickHandler = useCallback(() => dispatch(navigateToChallengeList()), [
    dispatch,
  ]);
  return <TitleBar onClickHandler={onClickHandler} />;
};

export default TitleBarContainer;
