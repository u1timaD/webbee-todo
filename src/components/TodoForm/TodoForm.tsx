import { useState } from 'react';

const TodoForm = ({ handleAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      handleAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="from-input"
        type="text"
        name="new-task"
        id=""
        placeholder="добавьте задачу"
        required
        value={newTask}
        onChange={handleChange}
      />
      <button className="btn btn--new-task">Create new task</button>
    </form>
  );
};

export default TodoForm;
