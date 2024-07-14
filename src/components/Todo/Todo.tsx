import { useContext } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { TaskListStyled, TodoSectionStyled } from './Todo.styled';
import { TaskProps } from './Todo.types';
import { TodoContext } from '../../App';

const Todo = () => {
  const { tasks, taskFilter } = useContext(TodoContext);

  const getFilterTask = (tasksArr: TaskProps[]) => {
    return tasksArr.filter((task) =>
      task.name.toLowerCase().includes(taskFilter.toLowerCase())
    );
  };

  return (
    <TodoSectionStyled>
      <TaskListStyled>
        {getFilterTask(tasks).map((task, idx) => (
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
