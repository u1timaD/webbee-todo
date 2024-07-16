import { ReactNode } from 'react';
import { TaskProps } from '../components/Todo/Todo.types';

export interface FilterContextType {
  taskFilter: string;
}

export interface SetFilterContextType {
  setTaskFilter: React.Dispatch<React.SetStateAction<string>>;
}

export interface FilterProviderType {
  children: ReactNode;
}

export interface TasksContextType {
  tasks: TaskProps[];
}

export type SetTasksContextType = React.Dispatch<React.SetStateAction<TaskProps[]>>;

export interface TasksProviderType {
  children: ReactNode;
}
