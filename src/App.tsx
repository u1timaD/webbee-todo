import { useState } from 'react';
import './App.css';
import TaskItem from './components/TaskItem/TaskItem';
import TodoForm from './components/TodoForm/TodoForm';
import Filter from './components/Filter/Filter';

function App() {
  const [tasks, setTasks] = useState([
    'Задача первая: Закончить отчет по проекту до конца дня.',
    'Задача вторая: Провести встречу с командой разработчиков в 14:00.',
    'Задача третья: Обновить документацию по новому релизу.',
    'Задача четвёртая: Ответить на письма клиентов и партнеров.',
    'Задача пятая: Подготовить презентацию для совещания в пятницу.',
  ]);

  const [taskFilter, setTaskFilter] = useState('');

  const handleClickDel = (number) => {
    setTasks((prev) => {
      const newTask = [...prev];
      newTask.splice(number, 1);
      return newTask;
    });
  };

  const handleClickEdit = (currentTask, index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = currentTask;
      return updatedTasks;
    });
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleChangeFilter = (value) => {
    setTaskFilter(value);
  };

  return (
    <>
      <div className="todo">
        <div className="todo-container">
          <Filter handleChangeFilter={handleChangeFilter} />
          <div className="todo-task todo-task__wrapper">
            <ul className="todo-task__item">
              {tasks
                .filter((task) =>
                  task.toLowerCase().includes(taskFilter.toLowerCase())
                )
                .map((task, idx) => (
                  <TaskItem
                    key={idx}
                    index={idx}
                    task={task}
                    handleClickDel={handleClickDel}
                    handleClickEdit={handleClickEdit}
                  />
                ))}
            </ul>
          </div>
          <TodoForm handleAddTask={handleAddTask} />
        </div>
      </div>
    </>
  );
}

export default App;
