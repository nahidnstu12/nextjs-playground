import * as ACTIONS from "../constants";
import axios from "axios";
import { postData } from "../../utils/fetchData";
import Cookies from "js-cookie";

export const dispatchLogin = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: ACTIONS.NOTIFY,
      payload: { loading: true },
    });
    
    // login process
    const res = await postData("auth/login", userData);
    console.log(res);
    if (res.status)
      return dispatch({
        type: ACTIONS.NOTIFY,
        payload: { error: res.msg },
      });
    dispatch({ type: ACTIONS.NOTIFY, payload: { sucess: "Login Sucess" } });
    dispatch({
      type: ACTIONS.LOGIN_SUCESS,
      payload: { token: res.token, user: userData.username },
    });
    Cookies.set("loginToken", JSON.stringify(res.token), {
      path: "/",
      expires: 14,
      sameSite: true,
      //  secure: true,
    });
  } catch (err) {}
};

export const fetchUser = async (token) => {
  const res = await axios.get(process.env.BASE_URL + "/auth/login", {
    headers: { Authorization: token },
  });
  return res;
};

export const dispatchGetUser = (res) => {
  return {
    type: ACTIONS.GET_USER,
    payload: {
      user: res.data,
      isAdmin: res.data.role === 1 ? true : false,
    },
  };
};
