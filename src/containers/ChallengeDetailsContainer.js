import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChallengeDetails from "../components/ChallengeDetails";
import { joinTeamAction, createTeamAction } from "../actions/challengeActions";

const ChallengeDetailsContainer = () => {
  const challengeDetails = useSelector((state) => state.challengeDetailsReducer);
  const dispatch = useDispatch();
  const joinTeamCallback = useCallback((joinData) => dispatch(joinTeamAction(joinData)), [dispatch])
  const createTeamCallback = useCallback((createTeamData) => dispatch(createTeamAction(createTeamData)),[dispatch])

  return (
    <ChallengeDetails
      challengeDetails={challengeDetails}
      onJoinTeam={joinTeamCallback}
      onCreateTeam={createTeamCallback}
    />
  );
};

export default ChallengeDetailsContainer;
