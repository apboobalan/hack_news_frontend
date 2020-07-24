import React from "react";
import "./tailwind.output.css";
import "./components/challengeList"
import ChallengeList from "./components/challengeList";
let challengeList = [
  {title: "hack news front end in react", description: "Build a challenges front end in react", tags: ["react", "redux"]},
  {title: "hack news back end in react", description: "Build a challenges back end in elixir", tags: ["elixir", "ecto", "phoenix"]}]

const App = () => (
  <div className="container">
    <header>
      <section className="bg-white p-3 shadow-lg">
        <a className="p-2 rounded border border-black inline-block" href="/">
          <div className="font-black text-xl pl-3 pr-3 border-black">HACK NEWS.</div>
        </a>
      </section>
    </header>
    <section>
      <ChallengeList challengeList={challengeList}/>
    </section>
  </div>
);

export default App;
