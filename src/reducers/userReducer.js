import { USER, AUTH_SUCCESS, SIGN_OUT, DEFAULT } from "../constants";

const initialState = {
  name: null,
  email: null,
  jwt: null,
};

const userReducer = (state = initialState, action = { type: DEFAULT }) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      localStorage.setItem(USER, JSON.stringify(action.user))
      return {
        ...state,
        name: action.user.name,
        email: action.user.email,
        jwt: action.user.jwt,
      };
    case SIGN_OUT:
      localStorage.setItem(USER, null)
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
