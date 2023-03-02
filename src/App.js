import { useState } from "react";
import "./App.css";
import Task from "./components/task/Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>new task</button>
      </div>
      <div className="list">
        {todoList.map((task, key) => {
          return (
            <Task
              taskName={task.taskName}
              deleteTask={deleteTask}
              id={task.id}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
