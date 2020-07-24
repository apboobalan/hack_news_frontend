import React from "react";
import { Provider } from "react-redux";
import store from "../reducers/store";
export const withProvider = (component) => <Provider store={store}>{component}</Provider>;
