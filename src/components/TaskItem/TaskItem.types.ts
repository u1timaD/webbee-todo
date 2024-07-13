export interface TaskListProps {
  task: string;
  index: string;
  number: number;
  clickDel: (index: string) => void;
  clickEdit: (currentTask: string, index: string) => void;
}
