import React from "react";

import ChallengeContainer from "../containers/ChallengeContainer";

const ChallengeList = ({ challengeList }) => {
  return (
    <div className="border border-gray-400 m-2 p-5 rounded">
      <div className="text-lg p-1 m-1 font-black">Challenges</div>
      {challengeList.map((challenge) => (
        <ChallengeContainer key={challenge.id} challenge={challenge}/>
      ))}
    </div>
  );
};

export default ChallengeList;
