import React from "react";

const ChallengeTeam = ({ challengeTeam, onClickHandler }) => (
  <div
    key={challengeTeam.name}
    className="p-5 m-2 border border-gray-400 rounded inline-block align-top"
  >
    <div className="font-black">{challengeTeam.name}</div>
    <div>
      {challengeTeam.users.map((user) => (
        <div key={user.email}>{user.name}</div>
      ))}
      <div
        data-testid="join"
        onClick={() => onClickHandler({ name: challengeTeam.name })}
        className="bg-black text-white inline-block mt-2 pl-3 pr-3 rounded hover:bg-white hover:text-black border border-black cursor-pointer"
      >
        JOIN
      </div>
    </div>
  </div>
);

export default ChallengeTeam;
