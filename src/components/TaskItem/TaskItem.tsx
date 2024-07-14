import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import Button from '../Button/Button';
import {
  ButtonWrapperStyled,
  TaskItemStyled,
  TaskLabelStyled,
  TaskTextStyled,
} from './TaskItem.styled';
import Input from '../Input/Input';
import { Checkbox, Typography } from '@mui/material';
import { TaskListProps } from './TaskItem.types';
import { TasksContext } from '../../providers/TasksProvider';

const TaskItem = ({ task, id, number, done }: TaskListProps) => {
  const { setTasks } = useContext(TasksContext);
  const [currentTask, setCurrentTask] = useState(task);
  const [edit, setEdit] = useState(false);

  const handleOnChangeTask = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(e.target.value);
  }, []);

  const handleOnChangeCheckbox = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, done: e.target.checked } : task
        )
      );
    },
    [setTasks, id]
  );

  const handleOnSave = useCallback(() => {
    if (currentTask !== task) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, name: currentTask } : task
        )
      );
    }
    setEdit(false);
  }, [setTasks, id, currentTask, task]);

  const handleOnDelete = useCallback(() => {
    setTasks((prev) => [...prev].filter((item) => item.id !== id));
  }, [setTasks, id]);

  const handleOnCancel = useCallback(() => {
    setCurrentTask(task);
    setEdit(false);
  }, [task]);

  const handleOnEdit = useCallback(() => {
    setEdit(true);
  }, []);

  useEffect(() => {
    setCurrentTask(task);
  }, [task]);

  return (
    <TaskItemStyled>
      <TaskLabelStyled>
        <span>{number + 1}</span>
        {edit ? (
          <Input
            type="text"
            value={currentTask}
            onChange={handleOnChangeTask}
          />
        ) : (
          <TaskTextStyled>
            <Checkbox onChange={handleOnChangeCheckbox} checked={done} />
            <Typography
              sx={{
                textDecoration: done ? 'line-through' : 'none',
              }}
            >
              {task}
            </Typography>
          </TaskTextStyled>
        )}
      </TaskLabelStyled>
      <ButtonWrapperStyled>
        {edit ? (
          <>
            <Button handleClick={handleOnSave}>save</Button>
            <Button handleClick={handleOnCancel}>cancel</Button>
          </>
        ) : (
          <>
            <Button handleClick={handleOnDelete}>delete</Button>
            <Button handleClick={handleOnEdit}>edit</Button>
          </>
        )}
      </ButtonWrapperStyled>
    </TaskItemStyled>
  );
};

export default TaskItem;
