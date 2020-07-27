import React from "react";

import ChallengeContainer from "../containers/ChallengeContainer";
import Sort from "./Sort";

const ChallengeList = ({ challengeList, onSortBy, sort }) => {
  return (
    <div className="border border-gray-400 m-2 p-5 rounded">
      <div>
        <div className="inline-block text-lg p-1 m-1 font-black">Challenges</div>
        <Sort sort={sort} onSortBy={onSortBy} />
      </div>
      {challengeList.map((challenge) => (
        <ChallengeContainer key={challenge.id} challenge={challenge} />
      ))}
    </div>
  );
};

export default ChallengeList;
