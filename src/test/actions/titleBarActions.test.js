import {
  signOutAction,
  navigateToCreateChallengeAction,
  navigateToChallengeList,
} from "../../actions/titleBarActions";
import {
  SIGN_OUT,
  NAVIGATE_TO_CREATE_CHALLENGE,
  NAVIGATE_TO_CHALLENGE_LIST,
} from "../../constants";
import { act } from "@testing-library/react";
import { mockModuleFunction } from "../test_helper";
const challengeApi = require("../../api/challengeApi");

describe("challenge actions", () => {
  test("calls dispatch with sign out when signout action is called", async () => {
    const dispatch = jest.fn();

    signOutAction(1)(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith({
      type: SIGN_OUT,
    });
  });

  test("calls dispatch with navigate create challenge when create challenge action is called", async () => {
    const dispatch = jest.fn();

    navigateToCreateChallengeAction(1)(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith({
      type: NAVIGATE_TO_CREATE_CHALLENGE,
    });
  });

  test("calls dispatch with navigate to challenge list when challenge list action is called", async () => {
    const dispatch = jest.fn();

    navigateToChallengeList(1)(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith({
      type: NAVIGATE_TO_CHALLENGE_LIST,
    });
  });
});
