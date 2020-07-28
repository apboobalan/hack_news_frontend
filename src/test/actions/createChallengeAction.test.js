import { createChallengeAction } from "../../actions/createChallengeActions";
import {
    NAVIGATE_TO_CHALLENGE_LIST,
} from "../../constants";
import { act } from "@testing-library/react";
import { mockModuleFunction } from "../test_helper";
const challengeApi = require("../../api/challengeApi");

describe("create challenge actions", () => {
  test("calls dispatch with navigate to challenge list when createChallengeAction is called", async () => {
    const getState = jest
      .fn()
      .mockImplementationOnce(() => ({ userReducer: { jwt: "T0K3N" } }));
    const { promise, dispatch } = mockModuleFunction(
      challengeApi,
      "createChallenge",
      { data: "details" }
    );

    createChallengeAction()(dispatch, getState);
    await act(() => promise);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith({
      type: NAVIGATE_TO_CHALLENGE_LIST,
    });
  });
});
