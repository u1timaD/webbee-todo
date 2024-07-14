import { ReactNode } from 'react';
import { TaskProps } from '../components/Todo/Todo.types';

export interface FilterContextType {
  taskFilter: string;
  setTaskFilter: React.Dispatch<React.SetStateAction<string>>;
}

export interface FilterProviderType {
  children: ReactNode;
}

export interface TasksContextType {
  tasks: TaskProps[];
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
  handleAddTask: (value: string) => void;
}

export interface TasksProviderType {
  children: ReactNode;
}
