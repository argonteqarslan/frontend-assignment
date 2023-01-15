import React, { useState } from "react";
import AddTask from "./AddTask";
import ListTasks from "./ListTasks";


const Tasks = () => {
  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
  });

  return (
    <>
      {1 ? (
        <>
          <AddTask todo={todo} setTodo={setTodo} />
          <ListTasks todo={todo} setTodo={setTodo} />
        </>
      ) : (
        <>
          <ListTasks todo={todo} setTodo={setTodo} />
        </>
      )}
    </>
  );
};

export default Tasks;
