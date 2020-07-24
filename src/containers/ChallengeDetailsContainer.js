import React from "react";
import { useSelector } from "react-redux";
import ChallengeDetails from "../components/ChallengeDetails";

const ChallengeContainer = () => {
  const challengeDetails = useSelector((state) => state.challengeDetailsReducer);
  return <ChallengeDetails challengeDetails={challengeDetails} />;
};

export default ChallengeContainer;
