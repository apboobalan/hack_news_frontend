import React from "react";
import { useSelector } from "react-redux";
import "./tailwind.output.css";
import "./components/challengeList";
import "./components/TitleBar";
import ChallengeListContainer from "./containers/ChallengeListContainer";
import ChallengeDetailsContainer from "./containers/ChallengeDetailsContainer";
import TitleBarContainer from "./containers/TitleBarContainer";

import Auth from './components/Auth'

const App = () => {
  const containerView = useSelector((state) => state.containerReducer.containerView);

  return (
    <div className="container">
      <TitleBarContainer />
      <section>
        {containerView === "CHALLENGE_LIST" ? (
          <ChallengeListContainer />
        ) : (
          <ChallengeDetailsContainer />
        )}
      </section>
      <Auth/>
      <Auth type={"signIn"}/>
    </div>
  );
};

export default App;
