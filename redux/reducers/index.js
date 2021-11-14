import { combineReducers } from "redux";
import courses from "./courseReducer";
import auth from "./authReducer";
import notify from "./notifyReducer";
import shopCart from "./shopReducer"

export default combineReducers({
  courses,
  auth,
  notify,
  shopCart
});
