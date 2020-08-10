import { NAVIGATE_TO_CHALLENGE_DETAILS, DEFAULT, SIGN_OUT } from "../constants";

const initialState = {
  id: null,
  title: null,
  description: null,
  tags: [],
  teams: [],
  votes: 0,
  enableUpvote: false,
};
const challengeDetailsReducer = (state = initialState, actions = { type: DEFAULT }) => {
  switch (actions.type) {
    case NAVIGATE_TO_CHALLENGE_DETAILS:
      return {
        ...state,
        id: actions.challenge.id,
        title: actions.challenge.title,
        description: actions.challenge.description,
        teams: actions.challenge.teams,
        tags: actions.challenge.tags,
        votes: actions.challenge.votes,
        enableUpvote: actions.challenge.enableUpvote,
      };
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};

export default challengeDetailsReducer;
