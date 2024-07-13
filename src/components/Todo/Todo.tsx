import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskItem from '../TaskItem/TaskItem';
import TodoForm from '../TodoForm/TodoForm';
import Filter from '../Filter/Filter';
import {
  TaskListStyled,
  TaskWrapperStyled,
  TodoSectionStyled,
  TodoWrapperStyled,
} from './Todo.styled';
import { TASKS_DATA } from './Todo.constants';
import { TaskProps } from './Todo.types';

const Todo = () => {
  const [tasks, setTasks] = useState<TaskProps[]>(TASKS_DATA);
  const [taskFilter, setTaskFilter] = useState('');

  const handleClickDel = (index: string) => {
    setTasks((prev) => [...prev].filter((item) => item.id !== index));
  };

  const handleClickEdit = (currentTask: string, index: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === index ? { ...task, name: currentTask } : task
      )
    );
  };

  const handleAddTask = useCallback((newTask: string) => {
    setTasks((prevTasks) => [...prevTasks, { id: uuidv4(), name: newTask }]);
  }, []);

  const handleChangeFilter = useCallback((value: string) => {
    setTaskFilter(value);
  }, []);

  const getFilterTask = (tasksArr: TaskProps[]) => {
    return tasksArr.filter((task) =>
      task.name.toLowerCase().includes(taskFilter.toLowerCase())
    );
  };

  return (
    <TodoSectionStyled>
      <TodoWrapperStyled>
        <Filter handleChangeFilter={handleChangeFilter} />
        <TaskWrapperStyled>
          <TaskListStyled>
            {getFilterTask(tasks).map((task, idx) => (
              <TaskItem
                key={task.id}
                number={idx}
                index={task.id}
                task={task.name}
                clickDel={handleClickDel}
                clickEdit={handleClickEdit}
              />
            ))}
          </TaskListStyled>
        </TaskWrapperStyled>
        <TodoForm handleAddTask={handleAddTask} />
      </TodoWrapperStyled>
    </TodoSectionStyled>
  );
};

export default Todo;
