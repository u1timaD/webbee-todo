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
import { SetTasksContext } from '../../providers/TasksProvider';

const TaskItem = ({ text, id, number, done }: TaskListProps) => {
  const setTasks = useContext(SetTasksContext);
  const [currentText, setCurrentText] = useState(text);
  const [edit, setEdit] = useState(false);

  const handleOnChangeText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCurrentText(e.target.value);
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
    if (currentText !== text) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, name: currentText } : task
        )
      );
    }
    setEdit(false);
  }, [setTasks, id, currentText, text]);

  const handleOnDelete = useCallback(() => {
    setTasks((prev) => [...prev].filter((item) => item.id !== id));
  }, [setTasks, id]);

  const handleOnCancel = useCallback(() => {
    setCurrentText(text);
    setEdit(false);
  }, [text]);

  const handleOnEdit = useCallback(() => {
    setEdit(true);
  }, []);

  useEffect(() => {
    setCurrentText(text);
  }, [text]);

  return (
    <TaskItemStyled>
      <TaskLabelStyled>
        <span>{number + 1}</span>
        {edit ? (
          <Input
            type="text"
            value={currentText}
            onChange={handleOnChangeText}
          />
        ) : (
          <TaskTextStyled>
            <Checkbox onChange={handleOnChangeCheckbox} checked={done} />
            <Typography
              sx={{
                textDecoration: done ? 'line-through' : 'none',
              }}
            >
              {text}
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
