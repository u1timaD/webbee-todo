import { ChangeEvent, useCallback, useContext, useState } from 'react';
import { TodoFormStyled } from './TotoForm.styled';
import Input from '../Input/Input';
import { TodoContext } from '../../App';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = () => {
  const [newTask, setNewTask] = useState('');

  const { tasks, setTasks } = useContext(TodoContext);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const createTask = { id: uuidv4(), name: newTask, done: false };
    if (tasks === null) {
      setTasks([createTask]);
    } else {
      setTasks([...tasks, createTask]);
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
      <button>Create new task</button>
    </TodoFormStyled>
  );
};

export default TodoForm;
