import { NAVIGATE_TO_CHALLENGE_DETAILS } from "../constants";

const initialState = {
  id: null,
  title: "Challenge Title",
  description: "Challenge Description.",
  tags: [],
  teams: [],
  votes: 0,
  enableUpvote: false
};
const challengeDetailsReducer = (state = initialState, actions = {type: "DEFAULT"}) => {
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
        enableUpvote: actions.challenge.enableUpvote
      };
    default:
      return state;
  }
};

export default challengeDetailsReducer;
