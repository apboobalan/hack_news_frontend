import { NAVIGATE_TO_CHALLENGE_DETAILS, NAVIGATE_TO_CHALLENGE_LIST } from "../constants";

const initialState = {
  containerView: "CHALLENGE_LIST",
};

export default (state = initialState, action = { type: "DEFAULT" }) => {
  switch (action.type) {
    case NAVIGATE_TO_CHALLENGE_DETAILS:
      return { ...state, containerView: "CHALLENGE_DETAILS" };
    case NAVIGATE_TO_CHALLENGE_LIST:
      return {...state, containerView: "CHALLENGE_LIST"}
    default:
      return state;
  }
};
