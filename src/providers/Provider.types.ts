import { ReactNode } from 'react';
import { TaskProps } from '../components/Todo/Todo.types';

export type FilterContextType = string;

export type SetFilterContextType = React.Dispatch<React.SetStateAction<string>>;

export interface FilterProviderType {
  children: ReactNode;
}

export type TasksContextType = TaskProps[];

export type SetTasksContextType = React.Dispatch<
  React.SetStateAction<TaskProps[]>
>;

export interface TasksProviderType {
  children: ReactNode;
}
