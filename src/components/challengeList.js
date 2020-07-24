import React from "react";

import ChallengeContainer from "../containers/ChallengeContainer";

const ChallengeList = ({ challengeList }) => {
  return (
    <div>
      <div className="text-lg p-3 mt-4 ml-3 mr-3 border border-gray-300 rounded font-black">Challenges</div>
      {challengeList.map((challenge) => (
        <ChallengeContainer key={challenge.title} challenge={challenge}/>
      ))}
    </div>
  );
};

export default ChallengeList;
