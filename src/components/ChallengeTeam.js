import React from "react";

const ChallengeTeam = ({ challengeTeam }) => (
  <div key={challengeTeam.name}>
    <div>{challengeTeam.name}</div>
    <div>
      {challengeTeam.members.map((member) => (
        <div key={member.name}>{member.name}</div>
      ))}
    </div>
  </div>
);

export default ChallengeTeam;
