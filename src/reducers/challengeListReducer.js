import { CHALLENGE_LIST_SUCCESS, DEFAULT, SIGN_OUT } from "../constants";

const initialState = {
  challengeList: [],
  sort: "created"
};

const challengeListReducer = (state = initialState, actions = { type: DEFAULT }) => {
  switch (actions.type) {
    case CHALLENGE_LIST_SUCCESS:
      return { ...state, challengeList: actions.challengeList };
    case "SORT_SUCCESS":
      return {...state, challengeList: actions.challengeList, sort: actions.sort}
    case SIGN_OUT:
        return initialState
    default:
      return state;
  }
};

export default challengeListReducer;
