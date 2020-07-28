import challengeListReducer from "../../reducers/challengeListReducer";
import { CHALLENGE_LIST_SUCCESS } from "../../constants";

describe("challenge list reducer", () => {
  const initialState = {
    challengeList: [],
    "sort": "created"
  };

  const challengeList = [
    {
      id: 1,
      title: "hack news front end in react",
      description: "Build a challenges front end in react",
      tags: [{ name: "react" }, { name: "redux" }],
    },
    {
      id: 2,
      title: "hack news back end in elixir",
      description: "Build a challenges back end in elixir",
      tags: [{ name: "elixir" }, { name: "ecto" }, { name: "phoenix" }],
    },
  ];

  test("returns initial state by default", () => {
    expect(challengeListReducer()).toEqual(initialState);
  });

  test("returns state with updated challenge list", () => {
    const action = { type: CHALLENGE_LIST_SUCCESS, challengeList: challengeList };
    
    expect(challengeListReducer(initialState, action)).toEqual({...initialState, challengeList:[
      {
        id: challengeList[0].id,
        title: "hack news front end in react",
        description: challengeList[0].description,
        tags: challengeList[0].tags,
      },
      {
        id: challengeList[1].id,
        title: "hack news back end in elixir",
        description: challengeList[1].description,
        tags: challengeList[1].tags,
      },
    ]});
  });
});
