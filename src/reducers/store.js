import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import containerReducer from "./containerReducer";
import challengeDetailsReducer from "./challengeDetailsReducer";
import challengeListReducer from "./challengeListReducer";

const rootReducer = combineReducers({
  containerReducer,
  challengeDetailsReducer,
  challengeListReducer,
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
