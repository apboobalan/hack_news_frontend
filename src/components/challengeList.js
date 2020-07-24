import React from "react";

import Challenge from "./challenge";

const ChallengeList = ({ challengeList, onClickHandler }) => {
  return (
    <div>
      <div className="text-lg p-3 mt-4 ml-3 mr-3 border border-gray-300 rounded font-black">Challenges</div>
      {challengeList.map((challenge) => (
        <Challenge key={challenge.title} challenge={challenge} onClickHandler={onClickHandler}/>
      ))}
    </div>
  );
};

export default ChallengeList;
