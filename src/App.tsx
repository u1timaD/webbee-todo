import React, { useState } from 'react';
import Todo from './components/Todo/Todo';
import { TaskProps } from './components/Todo/Todo.types';
import { TASKS_DATA } from './components/Todo/Todo.constants';
import Filter from './components/Filter/Filter';
import TodoForm from './components/TodoForm/TodoForm';

interface TodoContextType {
  tasks: TaskProps[];
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
  taskFilter: string;
  setTaskFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const TodoContext = React.createContext<TodoContextType>({
  tasks: [],
  setTasks: () => {},
  taskFilter: '',
  setTaskFilter: () => {},
});

function App() {
  const [taskFilter, setTaskFilter] = useState('');
  const [tasks, setTasks] = useState<TaskProps[]>(TASKS_DATA);

  return (
    <TodoContext.Provider
      value={{
        tasks,
        setTasks,
        taskFilter,
        setTaskFilter,
      }}
    >
      <Filter />
      <Todo />
      <TodoForm />
    </TodoContext.Provider>
  );
}

export default App;
