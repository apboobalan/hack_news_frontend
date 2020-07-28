import React from "react";
import ChallengeTag from "./ChallengeTag";
import { VoteContainer } from "../Vote";

const Challenge = ({ challenge, onClickHandler }) => (
  <div
    className="border border-black ml-5 mt-5 p-3 inline-block rounded shadow-lg cursor-pointer"
    data-testid={`challenge-${challenge.id}`}
    onClick={onClickHandler}
  >
    <VoteContainer
      challengeId={challenge.id}
      enableUpvote={challenge.enableUpvote}
      count={challenge.votes}
      page={"LIST"}
    />
    <div className="font-black p-2">{challenge.title}</div>
    {challenge.tags.map((tag) => (
      <ChallengeTag key={tag.name} tag={tag} />
    ))}
  </div>
);

export default React.memo(Challenge);
