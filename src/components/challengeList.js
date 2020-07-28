import React from "react";

import ChallengeContainer from "../containers/ChallengeContainer";
import Sort from "./Sort";
import { withBorder } from "./styles";

const ChallengeList = ({ challengeList, onSortBy, sort }) => {
  return (
    <div className={withBorder}>
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
