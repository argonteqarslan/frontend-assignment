import { toast } from "react-toastify";

const taskReducer = (todos = [], action) => {
  switch (action.type) {
    case "GET_TASKS":

      return action.todos;
    case "ADD_TASK":
      toast.success("A todo was added...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return [action.todo.data, ...todos];
    case "UPDATE_TASK":
      toast.success("A todo was updated...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return todos.map((todo) => {

        return todo._id === action.todo.data.id ? action.todo.data : todo

      }
      );
    case "CHECK_TASK":
      toast.success("A todo status was changed...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return todos.map((todo) => {

        return todo._id === action.todo.data.id ? action.todo.data : todo

      }
      );
    case "DELETE_TASK":
      toast.success("A todo was deleted...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return todos.filter((todo) => todo._id !== action.id);
    case "CLEAR_TASKS":
      return [];
    default:
      return todos;
  }
};

export default taskReducer;
