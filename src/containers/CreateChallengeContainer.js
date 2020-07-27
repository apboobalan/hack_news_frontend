import React from "react";
import { useDispatch } from "react-redux";
import CreateChallenge from "../components/CreateChallenge";
import {
   createChallengeAction
} from "../actions/challengeActions";

const CreateChallengeContainer = () => {
  const dispatch = useDispatch();

  return (
    <CreateChallenge
      onClickHandler={(newChallengeData) => dispatch(createChallengeAction(newChallengeData))} />
  );
};

export default CreateChallengeContainer;
