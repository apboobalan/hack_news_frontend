import React from "react";

import Challenge from "./challenge";

const ChallengeList = ({ challengeList }) => {
  return (
    <div>
      <title> Challenges...</title>
      {challengeList.map((challenge) => (
        <Challenge key={challenge.title} challenge={challenge}/>
      ))}
    </div>
  );
};

export default ChallengeList;
