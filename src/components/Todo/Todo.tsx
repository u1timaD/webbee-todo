import { useContext } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { TaskListStyled, TodoSectionStyled } from './Todo.styled';
import { FilterContext } from '../../providers/FilterProvider';
import { TasksContext } from '../../providers/TasksProvider';

const Todo = () => {
  const { taskFilter } = useContext(FilterContext);
  const { tasks } = useContext(TasksContext);

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(taskFilter.toLowerCase())
  );

  return (
    <TodoSectionStyled>
      <TaskListStyled>
        {filteredTasks.map((task, idx) => (
          <TaskItem
            key={task.id}
            number={idx}
            id={task.id}
            task={task.name}
            done={task.done}
          />
        ))}
      </TaskListStyled>
    </TodoSectionStyled>
  );
};

export default Todo;
