import { NAVIGATE_TO_CHALLENGE_LIST } from "../constants";
import { createChallenge } from "../api/challengeApi";
import { checkForErrorAndDispatch } from "./infoActions";

export const createChallengeAction = (newChallengeData) => async (dispatch, getState) => {
  const jwt = getState().userReducer.jwt;
  const createChallengeResponse = await createChallenge(newChallengeData, jwt);

  checkForErrorAndDispatch(dispatch, createChallengeResponse, () =>
    dispatch({ type: NAVIGATE_TO_CHALLENGE_LIST })
  );
};
