import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./tailwind.output.css";
import "./components/challengeList";
import "./components/TitleBar";
import ChallengeListContainer from "./containers/ChallengeListContainer";
import ChallengeDetailsContainer from "./containers/ChallengeDetailsContainer";
import TitleBarContainer from "./containers/TitleBarContainer";
import AuthContainer from "./containers/AuthContainer";
import CreateChallengeContainer from "./containers/CreateChallengeContainer";
import {setInfoAction} from "./actions/challengeActions"
import Info from './components/Info'
import { SIGN_IN } from "./constants";

const App = () => {
  const containerView = useSelector((state) => state.containerReducer.containerView);
  const info = useSelector((state) => state.containerReducer.info);
  const dispatch = useDispatch()

  const clearInfo = () => {
    setTimeout(() => dispatch(setInfoAction(null)), 2000)
    return true;
  }
  return (
    <div className="container">
      <TitleBarContainer />
      <section>
        {
          {
            CHALLENGE_LIST: <ChallengeListContainer />,
            CHALLENGE_DETAILS: <ChallengeDetailsContainer />,
            SIGN_IN: <AuthContainer type={SIGN_IN} />,
            SIGN_UP: <AuthContainer />,
            CREATE_CHALLENGE: <CreateChallengeContainer />,
          }[containerView]
        }
        { info && clearInfo() && (<Info>{info}</Info>) }
      </section>
    </div>
  );
};

export default App;
