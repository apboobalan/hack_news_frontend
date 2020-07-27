import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { navigateToDetailsAction, getChallengeListAction  } from "./actions/challengeActions";

const URL = "http://localhost:4000";
export const voteApi = async (voteData, jwt) => {
  try {
    return await axios.post(`${URL}/api/challenge/vote`, voteData, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
  } catch (error) {
    console.log("vote failure.");
  }
};

export const voteAction = (voteData) => async (dispatch, getState) => {
  const jwt = getState().userReducer.jwt;
  await voteApi(voteData, jwt);
  if (voteData.page === "LIST") {
    getChallengeListAction()(dispatch, getState)
  } else {
    navigateToDetailsAction(voteData.challenge_id)(dispatch, getState);
  }
};

export const Vote = ({ challengeId, count, enableUpvote, onUpvote, page }) => {
  const upvote = (event) => {
    onUpvote({ challenge_id: challengeId, page: page });
    event.stopPropagation();
  };
  return (
    <div className="pl-3">
      <div className="inline-block text-xs font-black">votes: {count}</div>
      {enableUpvote && (
        <div onClick={upvote} className="inline-block pl-3 text-xs font-black">
          upvote&uarr;
        </div>
      )}
      {!enableUpvote && (
        <div className="inline-block pl-3 text-xs font-black text-gray-500">
          upvote&uarr;
        </div>
      )}
    </div>
  );
};

export const VoteContainer = ({ challengeId, count, enableUpvote, page }) => {
  const dispatch = useDispatch();

  return (
    <Vote
      challengeId={challengeId}
      enableUpvote={enableUpvote}
      onUpvote={(voteData) => dispatch(voteAction(voteData))}
      count={count}
      page={page}
    />
  );
};
