import {
  NAVIGATE_TO_CHALLENGE_LIST,
  SIGN_OUT,
  NAVIGATE_TO_CREATE_CHALLENGE,
} from "../constants";

export const signOutAction = () => (dispatch) => {
  dispatch({ type: SIGN_OUT });
};

export const navigateToCreateChallengeAction = () => (dispatch) =>
  dispatch({ type: NAVIGATE_TO_CREATE_CHALLENGE });

export const navigateToChallengeList = () => (dispatch) =>
  dispatch({ type: NAVIGATE_TO_CHALLENGE_LIST });
