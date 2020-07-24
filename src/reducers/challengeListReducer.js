const initialState = {
  challengeList: [],
};

const challengeListReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "CHALLENGE_LIST_SUCCESS":
      return { ...state, challengeList: actions.challengeList };
    default:
      return state;
  }
};

export default challengeListReducer;
