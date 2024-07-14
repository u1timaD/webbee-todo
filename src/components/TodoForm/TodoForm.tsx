import { ChangeEvent, useCallback, useContext, useState } from 'react';
import { TodoFormStyled } from './TotoForm.styled';
import Input from '../Input/Input';
import { TasksContext } from '../../providers/TasksProvider';

const TodoForm = () => {
  const [newTask, setNewTask] = useState('');
  const { handleAddTask } = useContext(TasksContext);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTask(newTask);
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
