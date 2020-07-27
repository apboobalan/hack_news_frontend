import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ChallengeDetails from "../components/ChallengeDetails";
import { joinTeamAction } from "../actions/challengeActions";

const ChallengeDetailsContainer = () => {
  const challengeDetails = useSelector((state) => state.challengeDetailsReducer);
  const dispatch = useDispatch()

  return <ChallengeDetails challengeDetails={challengeDetails} onJoinTeam={(joinData) => dispatch(joinTeamAction(joinData))} />;
};

export default ChallengeDetailsContainer;
