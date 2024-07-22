import { ChangeEvent, useCallback, useState } from 'react';
import { TodoFormStyled } from './TotoForm.styled';
import { v4 as uuidv4 } from 'uuid';
import Input from '../Input/Input';
import { setTasks } from '../../redux/todoSlice';
import { useDispatch } from 'react-redux';

const TodoForm = () => {
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const createTask = { id: uuidv4(), text: newTask, done: false };
    dispatch(setTasks(createTask));
    setNewTask('');
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
      <button>Create new task</button>
    </TodoFormStyled>
  );
};

export default TodoForm;
