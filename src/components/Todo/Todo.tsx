import { useMemo } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { TaskListStyled, TodoSectionStyled } from './Todo.styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Todo = () => {
  const taskFilter = useSelector((state: RootState) => state.todo.taskFilter);
  const tasks = useSelector((state: RootState) => state.todo.tasks);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) =>
      task.text.toLowerCase().includes(taskFilter.toLowerCase())
    );
  }, [tasks, taskFilter]);

  return (
    <TodoSectionStyled>
      <TaskListStyled>
        {filteredTasks.map((task, idx) => (
          <TaskItem
            key={task.id}
            number={idx}
            id={task.id}
            text={task.text}
            done={task.done}
          />
        ))}
      </TaskListStyled>
    </TodoSectionStyled>
  );
};

export default Todo;
