import React, { useState } from "react";
import "./tailwind.output.css";
import "./components/challengeList";
import ChallengeList from "./components/challengeList";
import ChallengeDetails from "./components/ChallengeDetails";
const challengeList = [
  {
    id: 1,
    title: "hack news front end in react",
    description: "Build a challenges front end in react",
    tags: [{ name: "react" }, { name: "redux" }],
  },
  {
    id: 2,
    title: "hack news back end in react",
    description: "Build a challenges back end in elixir",
    tags: [{ name: "elixir" }, { name: "ecto" }, { name: "phoenix" }],
  },
];

const challengeDetails = {
  id: 1,
  title: "hacker news front end react",
  description: "Develop hackathon website front end in react for the company.",
  tags: [{ name: "react" }, { name: "redux" }, { name: "tailwindcss" }],
  teams: [
    {
      name: "alpha",
      members: [{ name: "alpha-1" }, { name: "alpha-2" }, { name: "alpha-3" }],
    },
    { name: "zeta", members: [{ name: "zeta-1" }, { name: "zeta-2" }] },
  ],
};

const App = () => {
  const [containerView, setContainerView] = useState({ containerView: "CHALLENGE_LIST" });
  const navigateToDetailsView = () =>
    setContainerView({ containerView: "CHALLENGE_DETAILS" });

  return (
    <div className="container">
      <header>
        <section className="bg-white p-3 shadow-lg">
          <a className="p-2 rounded border border-gray-400 inline-block" href="/">
            <div className="font-black text-xl pl-3 pr-3">HACK NEWS.</div>
          </a>
        </section>
      </header>
      <section>
        {containerView.containerView === "CHALLENGE_LIST" ? (
          <ChallengeList
            challengeList={challengeList}
            onClickHandler={navigateToDetailsView}
          />
        ) : (
          <ChallengeDetails challengeDetails={challengeDetails} />
        )}
      </section>
    </div>
  );
};

export default App;
