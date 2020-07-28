import { SET_INFO } from "../constants";

export const setInfoAction = (info) => (dispatch) =>
  dispatch({ type: SET_INFO, info: info });
  
export const checkForErrorAndDispatch = (dispatch, data, callback) => {
  data.error ? dispatch({ type: SET_INFO, info: data.error }) : callback();
};
