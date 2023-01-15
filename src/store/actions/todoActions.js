import axios from "axios";
import { url, setHeaders } from "../../api";
import { toast } from "react-toastify";

export const getTasks = () => {
  return (dispatch) => {
    axios
      .get(`${url}/tasks/all`, setHeaders())
      .then((todos) => {

        dispatch({
          type: "GET_TASKS",
          todos: todos.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addTask = (newTodo) => {

  return (dispatch, getState) => {
    const author = getState().auth.name;
    const uid = getState().auth._id;
    axios
      .post(`${url}/tasks/create`, { ...newTodo, author, uid }, setHeaders())
      .then((todo) => {
        dispatch({
          type: "ADD_TASK",
          todo,
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

export const updateTask = (updatedTodo, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/tasks/${id}`, updatedTodo, setHeaders())
      .then((todo) => {
        dispatch({
          type: "UPDATE_TASK",
          todo,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const deleteTask = (id) => {
  return (dispatch) => {
    axios
      .delete(`${url}/tasks/${id}`, setHeaders())
      .then(() => {
        dispatch({
          type: "DELETE_TASK",
          id,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const checkTask = (id) => {
  return (dispatch) => {
    axios
      .patch(`${url}/tasks/${id}`, {}, setHeaders())
      .then((todo) => {
        dispatch({
          type: "CHECK_TASK",
          todo,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};
