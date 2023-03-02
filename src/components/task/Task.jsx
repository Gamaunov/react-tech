const Task = (props) => {
  return (
    <div className="list__inner">
      <h1>{props.taskName}</h1>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  );
};

export default Task;
