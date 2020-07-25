import challengeDetailsReducer from "../../reducers/challengeDetailsReducer";
import { NAVIGATE_TO_CHALLENGE_DETAILS } from "../../constants";

describe("challenge details reducer", () => {
  const initialState = {
    title: "Challenge Title",
    description: "Challenge Description.",
    tags: [],
    teams: [],
  };
  const challengeDetails = {
    id: 2,
    title: "hack news back end in elixir",
    description: "Develop hackathon website back end in elixir for the company.",
    tags: [{ name: "elixir" }, { name: "ecto" }, { name: "phoenix" }],
    teams: [
      {
        name: "alpha",
        members: [{ name: "alpha-1" }, { name: "alpha-2" }],
      },
      {
        name: "zeta",
        members: [{ name: "zeta-1" }, { name: "zeta-2" }, { name: "zeta-3" }],
      },
    ],
  };
  test("returns initial state by default", () => {
    expect(challengeDetailsReducer()).toEqual(initialState);
  });

  test("returns state with updated challenge details", () => {
    const action = { type: NAVIGATE_TO_CHALLENGE_DETAILS, challenge: challengeDetails };
    
    expect(challengeDetailsReducer(initialState, action)).toEqual({
      title: "hack news back end in elixir",
      description: challengeDetails.description,
      tags: challengeDetails.tags,
      teams: challengeDetails.teams,
    });
  });
});
