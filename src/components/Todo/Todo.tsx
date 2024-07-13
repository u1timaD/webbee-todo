import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskItem from '../TaskItem/TaskItem';
import TodoForm from '../TodoForm/TodoForm';
import Filter from '../Filter/Filter';

const Todo = () => {
  type Task = {
    id: string;
    name: string;
  };

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: uuidv4(),
      name: 'Задача первая: Закончить отчет по проекту до конца дня.',
    },
    {
      id: uuidv4(),
      name: 'Задача вторая: Провести встречу с командой разработчиков в 14:00.',
    },
    {
      id: uuidv4(),
      name: 'Задача третья: Обновить документацию по новому релизу.',
    },
    {
      id: uuidv4(),
      name: 'Задача четвёртая: Ответить на письма клиентов и партнеров.',
    },
    {
      id: uuidv4(),
      name: 'Задача пятая: Подготовить презентацию для совещания в пятницу.',
    },
  ]);

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

  const getFilterTask = (tasksArr: Task[]) => {
    return tasksArr.filter((task) =>
      task.name.toLowerCase().includes(taskFilter.toLowerCase())
    );
  };

  return (
    <>
      <div className="todo">
        <div className="todo-container">
          <Filter handleChangeFilter={handleChangeFilter} />
          <div className="todo-task todo-task__wrapper">
            <ul className="todo-task__item">
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
            </ul>
          </div>
          <TodoForm handleAddTask={handleAddTask} />
        </div>
      </div>
    </>
  );
};

export default Todo;
