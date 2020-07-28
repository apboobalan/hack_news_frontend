import {
  SIGN_IN,
  NAVIGATE_TO_SIGN_IN,
  NAVIGATE_TO_SIGN_UP,
  SIGN_OUT,
  AUTH_SUCCESS,
} from "../constants";
import { signIn, signUp } from "../api/challengeApi";

import { checkForErrorAndDispatch } from "./infoActions";

export const switchAuth = (to) => (dispatch) => {
  if (to === SIGN_IN) {
    dispatch({ type: NAVIGATE_TO_SIGN_IN });
  } else {
    dispatch({ type: NAVIGATE_TO_SIGN_UP });
  }
};

export const authAction = (authData) => async (dispatch) => {
  const user =
    authData.type === SIGN_IN ? await signIn(authData) : await signUp(authData);

  checkForErrorAndDispatch(dispatch, user, () =>
    dispatch({ type: AUTH_SUCCESS, user: user.data })
  );
};

export const signOutAction = () => (dispatch) => {
  dispatch({ type: SIGN_OUT });
};
