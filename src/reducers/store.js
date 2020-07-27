import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import containerReducer from "./containerReducer";
import challengeDetailsReducer from "./challengeDetailsReducer";
import challengeListReducer from "./challengeListReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  containerReducer,
  challengeDetailsReducer,
  challengeListReducer,
  userReducer,
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
