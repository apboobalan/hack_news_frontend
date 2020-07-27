import {
  CHALLENGE_LIST_SUCCESS,
  NAVIGATE_TO_CHALLENGE_LIST,
  NAVIGATE_TO_CHALLENGE_DETAILS,
} from "../constants";
import {
  getChallengeList,
  getChallengeDetails,
  signIn,
  signUp,
  joinTeam,
  createTeam,
  createChallenge,
} from "../api/challengeApi";

export const navigateToDetailsAction = (id) => async (dispatch, getState) => {
  const jwt = getState().userReducer.jwt;
  const challengeDetails = await getChallengeDetails(id, jwt);
  challengeDetails.error
    ? dispatch({ type: "SET_INFO", info: challengeDetails.error })
    : dispatch({ type: NAVIGATE_TO_CHALLENGE_DETAILS, challenge: challengeDetails.data });
};

export const getChallengeListAction = () => async (dispatch, getState) => {
  const jwt = getState().userReducer.jwt;
  const sortByData = { type: getState().challengeListReducer.sort };
  if (jwt) {
    const challengeList = await getChallengeList(jwt, sortByData);
    challengeList.error
    ? dispatch({type: "SET_INFO", info: challengeList.error})
    : dispatch({ type: CHALLENGE_LIST_SUCCESS, challengeList: challengeList.data });
  } else {
    dispatch({ type: "NAVIGATE_TO_SIGN_IN" });
  }
};

export const navigateToChallengeList = () => (dispatch) =>
  dispatch({ type: NAVIGATE_TO_CHALLENGE_LIST });

export const switchAuth = (to) => (dispatch) => {
  if (to === "SIGN_IN") {
    dispatch({ type: "NAVIGATE_TO_SIGN_IN" });
  } else {
    dispatch({ type: "NAVIGATE_TO_SIGN_UP" });
  }
};

export const authAction = (authData) => async (dispatch) => {
  if (authData.type === "signIn") {
    const action = await signIn(authData);
    action.error 
    ? dispatch({ type: "SET_INFO", info: action.error })
    : dispatch(action);
  } else {
    const action = await signUp(authData);
    action.error 
    ? dispatch({ type: "SET_INFO", info: action.error }) 
    : dispatch(action);
  }
};

export const signOutAction = () => (dispatch) => {
  dispatch({ type: "SIGN_OUT" });
};

export const joinTeamAction = (joinData) => async (dispatch, getState) => {
  const jwt = getState().userReducer.jwt;
  const joinTeamResponse = await joinTeam(joinData, jwt);
  joinTeamResponse.error
  ? dispatch({type: "SET_INFO", info: joinTeamResponse.error})
  : navigateToDetailsAction(joinData.challenge_id)(dispatch, getState);
};

export const createTeamAction = (createTeamData) => async (dispatch, getState) => {
  const jwt = getState().userReducer.jwt;
  const createTeamResponse = await createTeam(createTeamData, jwt);
  createTeamResponse.error 
  ? dispatch({type: "SET_INFO", info: createTeamResponse.error})
  : navigateToDetailsAction(createTeamData.challenge_id)(dispatch, getState);
};

export const navigateToCreateChallengeAction = () => (dispatch) =>
  dispatch({ type: "NAVIGATE_TO_CREATE_CHALLENGE" });

export const createChallengeAction = (newChallengeData) => async (dispatch, getState) => {
  const jwt = getState().userReducer.jwt;
  const response = await createChallenge(newChallengeData, jwt);
  console.log(response)
  response.error
  ? dispatch({type: "SET_INFO", info: response.error})
  : dispatch({ type: NAVIGATE_TO_CHALLENGE_LIST });
};

export const sortByAction = (sortByData) => async (dispatch, getState) => {
  const jwt = getState().userReducer.jwt;
  const challengeList = await getChallengeList(jwt, sortByData);
  challengeList.error
  ? dispatch({type: "SET_INFO", info: challengeList.error})
  : dispatch({
    type: "SORT_SUCCESS",
    challengeList: challengeList.data,
    sort: sortByData.type,
  });
};

export const setInfoAction = (info) => (dispatch) =>
  dispatch({ type: "SET_INFO", info: info });
