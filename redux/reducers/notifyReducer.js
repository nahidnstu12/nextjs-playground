import * as ACTIONS from "../constants";
import initialState from "./initialState";

const notifyReducer = (state = initialState.notify, action) => {
  switch (action.type) {
    case ACTIONS.NOTIFY:
      return {
        ...state,
        notify: action.payload,
        // isLogged: true,
      };
    default:
      return state;
  }
};

export default notifyReducer
