import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChallengeList from "../components/challengeList";
import { getChallengeListAction, sortByAction } from "../actions/challengeActions";

const ChallengeListContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchChallengeList = async () => dispatch(getChallengeListAction());
    fetchChallengeList();
  }, [dispatch]);
  const challengeList = useSelector((state) => state.challengeListReducer.challengeList);
  const sort = useSelector((state) => state.challengeListReducer.sort);
  return (
    <ChallengeList
      challengeList={challengeList}
      sort={sort}
      onSortBy={(sortData) => dispatch(sortByAction(sortData))}
    />
  );
};

export default ChallengeListContainer;
