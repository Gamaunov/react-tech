const Task = (props) => {
  return (
    <div className="list__inner">
      <h1
        style={{ textDecoration: props.completed ? "none" : "line-through" }}
      >
        {props.taskName}
      </h1>
      <button onClick={() => props.completeTask(props.id)}>complete</button>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  );
};

export default Task;
