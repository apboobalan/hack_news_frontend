import React, { useState } from "react";
import ChallengeTeam from "./ChallengeTeam";
import ChallengeTag from "./ChallengeTag";
import { VoteContainer } from "../Vote";

const ChallengeDetails = ({ challengeDetails, onJoinTeam, onCreateTeam }) => {
  const [teamName, setTeamName] = useState("");
  const joinTeam = ({ name }) => {
    onJoinTeam({
      name: name,
      challenge_id: challengeDetails.id,
    });
  };

  const createNewTeam = () => {
    onCreateTeam({ name: teamName, challenge_id: challengeDetails.id });
    setTeamName("");
  };
  return (
    <div className="border border-gray-400 rounded m-2">
      <VoteContainer
        challengeId={challengeDetails.id}
        enableUpvote={challengeDetails.enableUpvote}
        count={challengeDetails.votes}
        page={"DETAILS"}
      />
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
      <div className="m-3 p-5 rounded border border-gray-400 inline-block">
        <label htmlFor="new-team">New Team :</label>
        <input
          type="text"
          placeholder=" Team Name"
          data-testid="new-team-name"
          id="new-team"
          className="p-3"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <div
          data-testid="new-team"
          onClick={createNewTeam}
          className="bg-black text-white inline-block p-3 rounded hover:bg-white hover:text-black border border-black cursor-pointer"
        >
          NEW TEAM &rarr;
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetails;
