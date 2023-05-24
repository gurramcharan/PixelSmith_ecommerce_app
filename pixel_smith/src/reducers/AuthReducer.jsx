export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.payload };
    case "setToken":
      return { ...state, login: action.payload };

    default:
      return state;
  }
};