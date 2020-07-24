import React from "react";
import "./tailwind.output.css";
import "./components/challengeList"
import ChallengeDetails from "./components/ChallengeDetails";
const challengeDetails = {
  title: "hacker news front end react",
  description: "Develop hackathon website front end in react for the company.",
  tags: [{name:"react"}, {name:"redux"}, {name:"tailwindcss"}],
  teams: [
    { name: "alpha", members: [{name:"alpha-1"}, {name:"alpha-2"}, {name:"alpha-3"}] },
    { name: "zeta", members: [{name:"zeta-1"}, {name:"zeta-2"}] },
  ],
};

const App = () => (
  <div className="container">
    <header>
      <section className="bg-white p-3 shadow-lg">
        <a className="p-2 rounded border border-gray-400 inline-block" href="/">
          <div className="font-black text-xl pl-3 pr-3">HACK NEWS.</div>
        </a>
      </section>
    </header>
    <section>
      <ChallengeDetails challengeDetails={challengeDetails}/>
    </section>
  </div>
);

export default App;
