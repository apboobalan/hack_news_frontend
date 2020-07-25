import {
  navigateToDetailsAction,
  getChallengeListAction,
  navigateToChallengeList
} from "../../actions/challengeActions";
import { NAVIGATE_TO_CHALLENGE_LIST, NAVIGATE_TO_CHALLENGE_DETAILS, CHALLENGE_LIST_SUCCESS } from "../../constants";
import { act } from "@testing-library/react";
import { mockModuleFunction } from "../test_helper";
const challengeApi = require("../../api/challengeApi");

describe("challenge actions", () => {
  test("calls dispatch with challenge list when getChallengeListAction is called", async () => {
    const { promise, dispatch } = mockModuleFunction(challengeApi, "getChallengeList", [
      1,
      2,
    ]);

    getChallengeListAction(1)(dispatch);
    await act(() => promise);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith({
      challengeList: [1, 2],
      type: CHALLENGE_LIST_SUCCESS,
    });
  });
  test("calls dispatch with challenge details when navigateToDetailsAction is called", async () => {
    const { promise, dispatch } = mockModuleFunction(
      challengeApi,
      "getChallengeDetails",
      { id: 1, title: "Challenge 1" }
    );

    navigateToDetailsAction(1)(dispatch);
    await act(() => promise);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith({
      challenge: { id: 1, title: "Challenge 1" },
      type: NAVIGATE_TO_CHALLENGE_DETAILS,
    });
  });
  test("calls dispatch with NAVIGATE_TO_CHALLENGE_LIST when navigateToChallengeListAction is called", async () => {
    const dispatch = jest.fn()
    navigateToChallengeList()(dispatch)

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith({type: NAVIGATE_TO_CHALLENGE_LIST})
  })
});
