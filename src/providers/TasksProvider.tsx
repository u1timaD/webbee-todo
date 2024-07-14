import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TaskProps } from '../components/Todo/Todo.types';
import { TASKS_DATA } from '../components/Todo/Todo.constants';
import { TasksContextType, TasksProviderType } from './Provider.types';

export const TasksContext = React.createContext<TasksContextType>({
  tasks: [],
  setTasks: () => {},
  handleAddTask: () => {},
});

const TasksProvider = ({ children }: TasksProviderType) => {
  const [tasks, setTasks] = React.useState<TaskProps[]>(TASKS_DATA);

  const handleAddTask = React.useCallback(
    (value: string) => {
      const createTask = { id: uuidv4(), name: value, done: false };
      if (tasks === null) {
        setTasks([createTask]);
      } else {
        setTasks([...tasks, createTask]);
      }
    },
    [setTasks, tasks]
  );

  return (
    <TasksContext.Provider value={{ tasks, setTasks, handleAddTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
