import React from "react";
import ChallengeTeam from "./ChallengeTeam";
import ChallengeTag from "./ChallengeTag";

const ChallengeDetails = ({ challengeDetails, onClickHandler }) => {
  const joinTeam = ({ name }) => {
    onClickHandler({
      name: name,
      challenge_id: challengeDetails.id,
    });
  };
  return (
    <div className="border border-gray-400 rounded m-2">
      <div className="font-black pl-5 pt-5 pr-5">{challengeDetails.title}</div>
      <div className="font-black text-gray-600 pl-5 pr-5 pb-5">
        {challengeDetails.description}
      </div>
      <div>
        {challengeDetails.tags.map((tag) => (
          <ChallengeTag key={tag.name} tag={tag} />
        ))}
      </div>
      <div className="pl-5 font-black">Teams</div>
      <div>
        {challengeDetails.teams.map((team) => (
          <ChallengeTeam key={team.name} challengeTeam={team} onClickHandler={joinTeam} />
        ))}
      </div>
    </div>
  );
};

export default ChallengeDetails;
