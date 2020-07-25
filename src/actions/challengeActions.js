import { CHALLENGE_LIST_SUCCESS,NAVIGATE_TO_CHALLENGE_LIST, NAVIGATE_TO_CHALLENGE_DETAILS } from "../constants";
import {getChallengeList,getChallengeDetails} from "../api/challengeApi"

export const navigateToDetailsAction = (id) => async (dispatch) => {
  const challengeDetails = await getChallengeDetails(id);
  dispatch({ type: NAVIGATE_TO_CHALLENGE_DETAILS, challenge: challengeDetails });
};

export const getChallengeListAction = () => async (dispatch) => {
  const challengeList = await getChallengeList();
  dispatch({ type: CHALLENGE_LIST_SUCCESS, challengeList: challengeList });
};


export const navigateToChallengeList = () => dispatch => dispatch({type: NAVIGATE_TO_CHALLENGE_LIST})