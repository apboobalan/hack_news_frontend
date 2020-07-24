import React from "react";

const ChallengeDetails = ({ challengeDetails }) => (
  <div>
    <div>{challengeDetails.title}</div>
    <div>{challengeDetails.description}</div>
    <div>
      {challengeDetails.tags.map((tag) => (
        <div
          key={tag}
          className="inline-block rounded border border-gray-300 pl-2 pr-2 m-2"
        >
          {" "}
          {tag}{" "}
        </div>
      ))}
    </div>
    <div>
      {challengeDetails.teams.map((team) => (
        <div key={team.name}>
          <div>{team.name}</div>
          <div>
            {team.members.map((member) => (
              <div key={member.name}>{member.name}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ChallengeDetails;
