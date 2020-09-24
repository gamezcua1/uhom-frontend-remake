export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const usersReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: true,
        sessionInfo: action.payload.sessionInfo,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        sessionInfo: {},
      };
    default:
      return state;
  }
};

export default usersReducer;
