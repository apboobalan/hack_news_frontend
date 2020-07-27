import React from "react";
import { useSelector } from "react-redux";
import "./tailwind.output.css";
import "./components/challengeList";
import "./components/TitleBar";
import ChallengeListContainer from "./containers/ChallengeListContainer";
import ChallengeDetailsContainer from "./containers/ChallengeDetailsContainer";
import TitleBarContainer from "./containers/TitleBarContainer";
import AuthContainer from "./containers/AuthContainer";
import CreateChallengeContainer from "./containers/CreateChallengeContainer";

const App = () => {
  const containerView = useSelector((state) => state.containerReducer.containerView);
  return (
    <div className="container">
      <TitleBarContainer />
      <section>
        {
          {
            CHALLENGE_LIST: <ChallengeListContainer />,
            CHALLENGE_DETAILS: <ChallengeDetailsContainer />,
            SIGN_IN: <AuthContainer type={"signIn"} />,
            SIGN_UP: <AuthContainer />,
            CREATE_CHALLENGE: <CreateChallengeContainer />,
          }[containerView]
        }
      </section>
      {/* <CreateChallenge/>
      <Auth/>
      <Auth type={"signIn"}/> */}
    </div>
  );
};

export default App;
