import { navigateToDetailsAction } from "../../actions/challengeActions";
import {
  NAVIGATE_TO_CHALLENGE_DETAILS,
} from "../../constants";
import { act } from "@testing-library/react";
import { mockModuleFunction } from "../test_helper";
const challengeApi = require("../../api/challengeApi");

describe("challenge actions", () => {
  test("calls dispatch with challenge details when navigateToDetailsAction is called", async () => {
    const getState = jest
      .fn()
      .mockImplementationOnce(() => ({ userReducer: { jwt: "T0K3N" } }));
    const { promise, dispatch } = mockModuleFunction(
      challengeApi,
      "getChallengeDetails",
      { data: "details" }
    );

    navigateToDetailsAction(1)(dispatch, getState);
    await act(() => promise);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith({
      challenge: "details",
      type: NAVIGATE_TO_CHALLENGE_DETAILS,
    });
  });
});
