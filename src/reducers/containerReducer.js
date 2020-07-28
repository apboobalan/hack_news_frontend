import {
  NAVIGATE_TO_CHALLENGE_DETAILS,
  NAVIGATE_TO_CHALLENGE_LIST,
  CHALLENGE_LIST,
  SIGN_IN,
  SIGN_UP,
  CREATE_CHALLENGE,
  CHALLENGE_DETAILS,
  DEFAULT
} from "../constants";

const initialState = {
  containerView: CHALLENGE_LIST,
  info: "Welcome to Hack news where you can manage Hackathons.",
};

export default (state = initialState, action = { type: DEFAULT }) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return { ...state, containerView: CHALLENGE_LIST };
    case NAVIGATE_TO_CHALLENGE_DETAILS:
      return { ...state, containerView: CHALLENGE_DETAILS };
    case NAVIGATE_TO_CHALLENGE_LIST:
      return { ...state, containerView: CHALLENGE_LIST };
    case "NAVIGATE_TO_SIGN_IN":
      return { ...state, containerView: SIGN_IN };
    case "NAVIGATE_TO_SIGN_UP":
      return { ...state, containerView: SIGN_UP };
    case "SIGN_OUT":
      return { ...state, containerView: SIGN_IN };
    case "NAVIGATE_TO_CREATE_CHALLENGE":
      return { ...state, containerView: CREATE_CHALLENGE };
    case "SET_INFO":
      return { ...state, info: action.info };
    default:
      return state;
  }
};
