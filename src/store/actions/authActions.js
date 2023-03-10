import axios from "axios";
import { url } from "../../api";
import { toast } from "react-toastify";

export const signUp = (user) => {
  return (dispatch) => {
    axios
      .post(`${url}/users/auth/register`, user)
      .then((token) => {

        localStorage.setItem("token", token.data.data.token);

        dispatch({
          type: "SIGN_UP",
          token: token.data.data.token,
        });
      })
      .catch((error) => {

        console.log(error.response);

        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const signIn = (email, password) => {
  return (dispatch) => {
    axios
      .post(`${url}/users/auth/login`, { email, password })
      .then((token) => {
        localStorage.setItem("token", token.data.data.token);

        dispatch({
          type: "SIGN_IN",
          token: token.data.data.token,
        });
      })
      .catch((error) => {
        console.log(error.response);

        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_TASKS",
    });

    dispatch({
      type: "SIGN_OUT",
    });

  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: "USER_LOADED",
        token,
      });
    } else return null;
  };
};
