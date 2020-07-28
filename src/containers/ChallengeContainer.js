import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import Challenge from "../components/challenge";
import { navigateToDetailsAction } from "../actions/challengeActions";

const ChallengeContainer = ({ challenge }) => {
  const dispatch = useDispatch();
  const onClickCallback = useCallback(() => dispatch(navigateToDetailsAction(challenge.id)),[dispatch, challenge])
  return (
    <Challenge
      challenge={challenge}
      onClickHandler={onClickCallback}
    />
  );
};

export default ChallengeContainer;
