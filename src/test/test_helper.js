import React from "react";
import { Provider } from "react-redux";
import store from "../reducers/store";

export const withProvider = (component) => <Provider store={store}>{component}</Provider>;

export const mockModuleFunction = (mod, fn, expected) => {
  const promise = Promise.resolve(expected);
  const mock = jest.spyOn(mod, fn);
  mock.mockImplementationOnce(() => promise);
  return { promise, dispatch: jest.fn() };
};
