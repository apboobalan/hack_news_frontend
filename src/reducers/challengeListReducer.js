import { CHALLENGE_LIST_SUCCESS } from "../constants";

const initialState = {
  challengeList: [],
  sort: "created"
};

const challengeListReducer = (state = initialState, actions = { type: "DEFAULT" }) => {
  switch (actions.type) {
    case CHALLENGE_LIST_SUCCESS:
      return { ...state, challengeList: actions.challengeList };
    case "SORT_SUCCESS":
      return {...state, challengeList: actions.challengeList, sort: actions.sort}
    default:
      return state;
  }
};

export default challengeListReducer;
