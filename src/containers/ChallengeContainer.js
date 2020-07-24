import React from "react";
import { useDispatch } from "react-redux";
import Challenge from "../components/challenge";
import { navigateToDetailsAction } from "../actions/challengeActions";

const ChallengeContainer = ({ challenge }) => {
  const dispatch = useDispatch();
  return (
    <Challenge
      challenge={challenge}
      onClickHandler={() => dispatch(navigateToDetailsAction(challenge.id))}
    />
  );
};

export default ChallengeContainer;
