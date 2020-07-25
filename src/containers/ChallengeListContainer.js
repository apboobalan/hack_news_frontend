import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChallengeList from "../components/challengeList";
import { getChallengeListAction } from "../actions/challengeActions";

const ChallengeListContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchChallengeList = async () => dispatch(getChallengeListAction());
    fetchChallengeList();
  }, [dispatch]);
  const challengeList = useSelector((state) => state.challengeListReducer.challengeList);
  return <ChallengeList challengeList={challengeList} />;
};

export default ChallengeListContainer;
