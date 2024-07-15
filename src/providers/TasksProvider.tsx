import { createContext, useState } from 'react';

import { TaskProps } from '../components/Todo/Todo.types';
import { TASKS_DATA } from '../components/Todo/Todo.constants';
import {
  SetTasksContextType,
  TasksContextType,
  TasksProviderType,
} from './Provider.types';

export const TasksContext = createContext<TasksContextType>({
  tasks: [],
});

export const SetTasksContext = createContext<SetTasksContextType>({
  setTasks: () => {},
});

const MainProvider = ({ children }: TasksProviderType) => {
  const [tasks, setTasks] = useState<TaskProps[]>(TASKS_DATA);

  return (
    <TasksContext.Provider value={{ tasks }}>
      <SetTasksContext.Provider value={{ setTasks }}>
        {children}
      </SetTasksContext.Provider>
    </TasksContext.Provider>
  );
};

export default MainProvider;
