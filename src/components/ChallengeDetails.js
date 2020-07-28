import React, { useState } from "react";
import ChallengeTeam from "./ChallengeTeam";
import ChallengeTag from "./ChallengeTag";
import { VoteContainer } from "../Vote";
import SubmitButton from './SubmitButton'
import InputWithLabel from "./InputWithLabel"
import { withBorder } from "./styles";

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
    <div className={withBorder}>
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
      <div className={`${withBorder} inline-block`}>
      <InputWithLabel
        id="new-team"
        label="New Team :"
        type="text"
        placeholder=" Team Name"
        testId="new-team-name"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        />
        <SubmitButton testId="new-team" onClickHandler={createNewTeam}>NEW TEAM &rarr;</SubmitButton>
      </div>
    </div>
  );
};

export default ChallengeDetails;
