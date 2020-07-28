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

export const switchAuth = (to) => (dispatch) => {
  if (to === "SIGN_IN") {
    dispatch({ type: "NAVIGATE_TO_SIGN_IN" });
  } else {
    dispatch({ type: "NAVIGATE_TO_SIGN_UP" });
  }
};

export const authAction = (authData) => async (dispatch) => {
  const user =
    authData.type === "signIn" ? await signIn(authData) : await signUp(authData);

  checkForErrorAndDispatch(dispatch, user, () =>
    dispatch({ type: "AUTH_SUCCESS", user: user.data })
  );
};

export const signOutAction = () => (dispatch) => {
  dispatch({ type: "SIGN_OUT" });
};

export const navigateToCreateChallengeAction = () => (dispatch) =>
  dispatch({ type: "NAVIGATE_TO_CREATE_CHALLENGE" });

export const createChallengeAction = (newChallengeData) => async (dispatch, getState) => {
  const jwt = getState().userReducer.jwt;
  const createChallengeResponse = await createChallenge(newChallengeData, jwt);

  checkForErrorAndDispatch(dispatch, createChallengeResponse, () =>
    dispatch({ type: NAVIGATE_TO_CHALLENGE_LIST })
  );
};

export const getChallengeListAction = () => async (dispatch, getState) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const jwt = getState().userReducer.jwt || (user && user.jwt);
  const sortByData = { type: getState().challengeListReducer.sort };
  if (jwt) {
    const challengeList = await getChallengeList(jwt, sortByData);
    checkForErrorAndDispatch(dispatch, challengeList, () =>
      dispatch({ type: CHALLENGE_LIST_SUCCESS, challengeList: challengeList.data })
    );
    dispatch({ type: "AUTH_SUCCESS", user: user });
  } else {
    dispatch({ type: "NAVIGATE_TO_SIGN_IN" });
  }
};

export const sortByAction = (sortByData) => async (dispatch, getState) => {
  const jwt = getState().userReducer.jwt;
  const challengeList = await getChallengeList(jwt, sortByData);
  checkForErrorAndDispatch(dispatch, challengeList, () =>
    dispatch({
      type: "SORT_SUCCESS",
      challengeList: challengeList.data,
      sort: sortByData.type,
    })
  );
};

export const navigateToChallengeList = () => (dispatch) =>
  dispatch({ type: NAVIGATE_TO_CHALLENGE_LIST });

export const navigateToDetailsAction = (id) => async (dispatch, getState) => {
  const jwt = getState().userReducer.jwt;
  const challengeDetails = await getChallengeDetails(id, jwt);

  checkForErrorAndDispatch(dispatch, challengeDetails, () =>
    dispatch({ type: NAVIGATE_TO_CHALLENGE_DETAILS, challenge: challengeDetails.data })
  );
};

export const createTeamAction = (createTeamData) => async (dispatch, getState) => {
  const jwt = getState().userReducer.jwt;
  const createTeamResponse = await createTeam(createTeamData, jwt);
  checkForErrorAndDispatch(dispatch, createTeamResponse, () =>
    navigateToDetailsAction(createTeamData.challenge_id)(dispatch, getState)
  );
};

export const joinTeamAction = (joinData) => async (dispatch, getState) => {
  const jwt = getState().userReducer.jwt;
  const joinTeamResponse = await joinTeam(joinData, jwt);
  checkForErrorAndDispatch(dispatch, joinTeamResponse, () =>
    navigateToDetailsAction(joinData.challenge_id)(dispatch, getState)
  );
};

export const setInfoAction = (info) => (dispatch) =>
  dispatch({ type: "SET_INFO", info: info });

export const checkForErrorAndDispatch = (dispatch, data, callback) => {
  data.error ? dispatch({ type: "SET_INFO", info: data.error }) : callback();
};
