import React from "react";
import SubmitLink from "./SubmitLink";

const TitleBar = ({ onClickHandler, name, onSignOut, onNavigateToCreateChallenge }) => (
  <header>
    <section className="bg-white p-3 shadow-lg">
      <div
        className="p-2 rounded border border-gray-400 inline-block cursor-pointer"
        onClick={onClickHandler}
        data-testid="logo"
      >
        <div className="font-black text-xl pl-3 pr-3">HACK NEWS.</div>
      </div>
      {name && (
        <div className="inline-block">
          <div className="inline-block pl-3">Welcome {name}</div>
          <SubmitLink onClick={onNavigateToCreateChallenge}>
            Create new challenge
          </SubmitLink>
          <SubmitLink onClick={onSignOut}>Sign Out</SubmitLink>
        </div>
      )}
    </section>
  </header>
);

export default React.memo(TitleBar);
