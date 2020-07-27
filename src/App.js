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
            SIGN_IN: <AuthContainer type={"signIn"} />,
            SIGN_UP: <AuthContainer />,
            CREATE_CHALLENGE: <CreateChallengeContainer />,
          }[containerView]
        }
        {
          info && clearInfo() && ( 
            <div className="fixed top-0 right-0 bg-gray-900 text-center py-4 lg:px-4 rounded m-5">
            <div
              className="p-2 bg-gray-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
              role="alert"
            >
              <span className="flex rounded-full bg-black uppercase px-2 py-1 text-xs font-bold mr-3">
                INFO
              </span>
              <span className="font-semibold mr-2 text-left flex-auto">{info}</span>
            </div>
          </div>
          )
        }
      </section>
    </div>
  );
};

export default App;
