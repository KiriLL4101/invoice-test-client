function noop() {}

const initialState = {
  token: null,
  userId: null,
  login: noop,
  logout: noop,
  isAuthenticated: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        login: action.payload,
      };
    case "SET_LOGOUT":
      return {
        ...state,
        logout: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    default:
      return state;
  }
};
