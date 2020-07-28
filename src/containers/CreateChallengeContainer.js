import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import CreateChallenge from "../components/CreateChallenge";
import { createChallengeAction } from "../actions/createChallengeActions";

const CreateChallengeContainer = () => {
  const dispatch = useDispatch();
  const createChallengeCallback = useCallback(
    (newChallengeData) => dispatch(createChallengeAction(newChallengeData)),
    [dispatch]
  );

  return <CreateChallenge onClickHandler={createChallengeCallback} />;
};

export default CreateChallengeContainer;
