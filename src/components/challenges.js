import React from "react";

const Challenges = ({ challenges }) => {
  return (
    <div>
      <title> Challenges...</title>
      {challenges.map((challenge) => {
        return <div key={challenge.title}>
            <title>{challenge.title}</title>
            {challenge.tags.map(tag =>  <div key={tag}>{tag}</div>)}
        </div>
      })}
    </div>
  );
};

export default Challenges;
