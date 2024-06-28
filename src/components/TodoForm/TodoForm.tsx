import { ChangeEvent, useState } from 'react';

type FormProps = {
  handleAddTask: (formValue: string) => void;
};

const TodoForm: React.FC<FormProps> = ({ handleAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
