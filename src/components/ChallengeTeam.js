import React from "react";

const ChallengeTeam = ({ challengeTeam }) => (
  <div key={challengeTeam.name} className="p-5 m-2 border border-gray-400 rounded inline-block align-top">
    <div className="font-black">{challengeTeam.name}</div>
    <div>
      {challengeTeam.members.map((member) => (
        <div key={member.name}>{member.name}</div>
      ))}
    </div>
  </div>
);

export default ChallengeTeam;
