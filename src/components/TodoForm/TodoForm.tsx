import { ChangeEvent, useState } from 'react';
import { TodoFormStyled } from './TotoForm.styled';
import Input from '../Input/Input';

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
    <TodoFormStyled onSubmit={handleSubmit}>
      <Input
        type="text"
        name="new-task"
        placeholder="добавьте задачу"
        required
        value={newTask}
        onChange={handleChange}
      />
      <button className="btn btn--new-task">Create new task</button>
    </TodoFormStyled>
  );
};

export default TodoForm;
