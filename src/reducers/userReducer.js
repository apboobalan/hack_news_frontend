const initialState = {
  name: null,
  email: null,
  jwt: null,
};

const userReducer = (state = initialState, action = { type: "DEFAULT" }) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return {
        ...state,
        name: action.user.name,
        email: action.user.email,
        jwt: action.user.jwt,
      };
    default:
      return state;
  }
};

export default userReducer;
