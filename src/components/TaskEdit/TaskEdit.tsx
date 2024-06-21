const TaskEdit = ({ currentTask, setCurrentTask }) => {
  const handleChange = (e) => {
    setCurrentTask(e.target.value);
  };

  return (
    <input
      type="text"
      className="task__edit"
      name="task-1"
      value={currentTask}
      onChange={handleChange}
    ></input>
  );
};

export default TaskEdit;
