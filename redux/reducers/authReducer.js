import * as ACTIONS from "../constants";
import initialState from "./initialState";
// const initialState = {
//   user: [],
//   isLogged: false,
//   isAdmin: false,
// };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_SUCESS:
      return {
        ...state,
        auth: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
