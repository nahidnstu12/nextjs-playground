import { combineReducers } from "redux";
import courses from "./courseReducer";
import auth from "./authReducer";
import notify from "./notifyReducer";

export default combineReducers({
  courses,
  auth,
  notify,
});
