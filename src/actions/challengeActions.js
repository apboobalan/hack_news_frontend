import { NAVIGATE_TO_CHALLENGE_DETAILS } from "../constants";
import { getChallengeDetails } from "../api/challengeApi";
import { checkForErrorAndDispatch } from "./infoActions";

export const navigateToDetailsAction = (id) => async (dispatch, getState) => {
  const jwt = getState().userReducer.jwt;
  const challengeDetails = await getChallengeDetails(id, jwt);

  checkForErrorAndDispatch(dispatch, challengeDetails, () =>
    dispatch({ type: NAVIGATE_TO_CHALLENGE_DETAILS, challenge: challengeDetails.data })
  );
};
