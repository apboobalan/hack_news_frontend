import containerReducer from "../../reducers/containerReducer";
import {
  NAVIGATE_TO_CHALLENGE_LIST,
  NAVIGATE_TO_CHALLENGE_DETAILS,
} from "../../constants";

describe("challenge container reducer", () => {
  const initialState = {
    containerView: "CHALLENGE_LIST",
  };
  test("returns initial state by default", () => {
    expect(containerReducer()).toEqual(initialState);
  });

  test("returns state with view to challenge details", () => {
    const action = { type: NAVIGATE_TO_CHALLENGE_DETAILS };

    expect(containerReducer(initialState, action)).toEqual({
      containerView: "CHALLENGE_DETAILS",
    });
  });

  test("returns state with view to challenge list", () => {
    const action = { type: NAVIGATE_TO_CHALLENGE_LIST };

    expect(containerReducer(initialState, action)).toEqual({
      containerView: "CHALLENGE_LIST",
    });
  });
});
