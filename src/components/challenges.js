import React from "react";

import Challenge from "./challenge";

const Challenges = ({ challenges }) => {
  return (
    <div>
      <title> Challenges...</title>
      {challenges.map((challenge) => (
        <Challenge key={challenge.title} challenge={challenge}/>
      ))}
    </div>
  );
};

export default Challenges;
