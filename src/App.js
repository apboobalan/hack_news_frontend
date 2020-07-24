import React, { useEffect } from "react";
import "./tailwind.output.css";
import "./components/challengeList";
import ChallengeListContainer from "./containers/ChallengeListContainer";
import ChallengeDetailsContainer from "./containers/ChallengeDetailsContainer";
import { useSelector, useDispatch } from "react-redux";
import { getChallengeListAction } from "./actions/challengeActions";

const App = () => {
  const containerView = useSelector((state) => state.containerReducer.containerView);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchChallengeList = async () => dispatch(getChallengeListAction());
    fetchChallengeList();
  }, [dispatch]);
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
        {containerView === "CHALLENGE_LIST" ? (
          <ChallengeListContainer />
        ) : (
          <ChallengeDetailsContainer />
        )}
      </section>
    </div>
  );
};

export default App;
