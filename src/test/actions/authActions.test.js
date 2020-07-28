import {
  switchAuth,
  signOutAction,
  authAction
} from "../../actions/authActions";
import { SIGN_IN, SIGN_OUT, NAVIGATE_TO_SIGN_IN, NAVIGATE_TO_SIGN_UP, AUTH_SUCCESS, SIGN_UP } from "../../constants";
import { act } from "@testing-library/react";
import { mockModuleFunction } from "../test_helper";
const challengeApi = require("../../api/challengeApi");

describe("auth actions", () => {
  test("calls dispatch with user data when authaction is called for sign in", async () => {
    const { promise, dispatch } = mockModuleFunction(
      challengeApi,
      "signIn",
      {data: "user"}
    );

    authAction({type: SIGN_IN})(dispatch);
    await act(() => promise);
    await expect(dispatch).toHaveBeenCalledTimes(1);
    await expect(dispatch).toBeCalledWith({
      user: "user",
      type: AUTH_SUCCESS,
    });
  });

  test("calls dispatch with user data when authaction is called for sign up", async () => {
    const { promise, dispatch } = mockModuleFunction(
      challengeApi,
      "signUp",
      {data: "user"}
    );

    authAction({type: SIGN_UP})(dispatch);
    await act(() => promise);
    await expect(dispatch).toHaveBeenCalledTimes(1);
    await expect(dispatch).toBeCalledWith({
      user: "user",
      type: AUTH_SUCCESS,
    });
  });

  test("calls dispatch with NAVIGATE_TO_SIGN_IN when switchAuth is called with SIGN_IN parameter", async () => {
    const dispatch = jest.fn()
    switchAuth(SIGN_IN)(dispatch)

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith({type: NAVIGATE_TO_SIGN_IN})
  })

  test("calls dispatch with NAVIGATE_TO_SIGN_UP when switchAuth is called with null parameter", async () => {
    const dispatch = jest.fn()
    switchAuth()(dispatch)

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith({type: NAVIGATE_TO_SIGN_UP})
  })

  test("calls dispatch with SIGN_OUT when signout action is called", async() => {
    const dispatch = jest.fn()
    signOutAction()(dispatch)

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith({type: SIGN_OUT}) 
  })
});
