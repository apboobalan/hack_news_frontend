import {
  CHALLENGE_LIST_SUCCESS,
  NAVIGATE_TO_SIGN_IN,
  AUTH_SUCCESS,
  SORT_SUCCESS,
  USER,
} from "../constants";
import { getChallengeList } from "../api/challengeApi";

import { checkForErrorAndDispatch } from "./infoActions";

export const getChallengeListAction = () => async (dispatch, getState) => {
  const user = JSON.parse(localStorage.getItem(USER));
  const jwt = getState().userReducer.jwt || (user && user.jwt);
  const sortByData = { type: getState().challengeListReducer.sort };
  if (jwt) {
    const challengeList = await getChallengeList(jwt, sortByData);
    checkForErrorAndDispatch(dispatch, challengeList, () =>
      dispatch({ type: CHALLENGE_LIST_SUCCESS, challengeList: challengeList.data })
    );
    dispatch({ type: AUTH_SUCCESS, user: user });
  } else {
    dispatch({ type: NAVIGATE_TO_SIGN_IN });
  }
};

export const sortByAction = (sortByData) => async (dispatch, getState) => {
  const jwt = getState().userReducer.jwt;
  const challengeList = await getChallengeList(jwt, sortByData);
  checkForErrorAndDispatch(dispatch, challengeList, () =>
    dispatch({
      type: SORT_SUCCESS,
      challengeList: challengeList.data,
      sort: sortByData.type,
    })
  );
};
