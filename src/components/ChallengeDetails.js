import React from "react";
import ChallengeTeam from './ChallengeTeam'
import ChallengeTag from './ChallengeTag'

const ChallengeDetails = ({ challengeDetails }) => (
  <div>
    <div>{challengeDetails.title}</div>
    <div>{challengeDetails.description}</div>
    <div>
      {challengeDetails.tags.map((tag) => (
        <ChallengeTag key={tag.name} tag={tag}/>
      ))}
    </div>
    <div>
      {challengeDetails.teams.map((team) => (
        <ChallengeTeam key={team.name} challengeTeam={team}/>
      ))}
    </div>
  </div>
);

export default ChallengeDetails;
