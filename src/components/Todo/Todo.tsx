import { useContext, useMemo } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { TaskListStyled, TodoSectionStyled } from './Todo.styled';
import { FilterContext } from '../../providers/FilterProvider';
import { TasksContext } from '../../providers/TasksProvider';

const Todo = () => {
  const { taskFilter } = useContext(FilterContext);
  const { tasks } = useContext(TasksContext);

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
