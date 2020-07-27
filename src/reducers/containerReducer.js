import { NAVIGATE_TO_CHALLENGE_DETAILS, NAVIGATE_TO_CHALLENGE_LIST } from "../constants";

const initialState = {
  containerView: "CHALLENGE_LIST",
};

export default (state = initialState, action = { type: "DEFAULT" }) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return { ...state, containerView: "CHALLENGE_LIST" };
    case NAVIGATE_TO_CHALLENGE_DETAILS:
      return { ...state, containerView: "CHALLENGE_DETAILS" };
    case NAVIGATE_TO_CHALLENGE_LIST:
      return { ...state, containerView: "CHALLENGE_LIST" };
    case "NAVIGATE_TO_SIGN_IN":
      return { ...state, containerView: "SIGN_IN" };
    case "NAVIGATE_TO_SIGN_UP":
      return { ...state, containerView: "SIGN_UP" };
    case "SIGN_OUT":
      return { ...state, containerView: "SIGN_IN" };
    case "NAVIGATE_TO_CREATE_CHALLENGE":
      return { ...state, containerView: "CREATE_CHALLENGE" };
    default:
      return state;
  }
};
