import React from "react";
import ChallengeTag from './ChallengeTag'

const Challenge = ({ challenge, onClickHandler }) => (
  <div className="border border-black ml-5 mt-5 p-3 inline-block rounded shadow-lg cursor-pointer" data-testid={`challenge-${challenge.id}`} onClick={onClickHandler}>
    <div className="font-black p-2">{challenge.title}</div>
    {challenge.tags.map((tag) => (
      <ChallengeTag key={tag.name} tag={tag}/>
    ))}
  </div>
);

export default Challenge;
