import { ChangeEvent, useCallback, useEffect, useState } from 'react';
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
import { useDispatch } from 'react-redux';
import {
  setTaskChecked,
  setTaskDelete,
  setTaskSave,
} from '../../redux/todoSlice';

const TaskItem = ({ text, id, number, done }: TaskListProps) => {
  const dispatch = useDispatch();
  const [currentText, setCurrentText] = useState(text);
  const [edit, setEdit] = useState(false);

  const handleOnChangeText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCurrentText(e.target.value);
  }, []);

  const handleOnChangeCheckbox = useCallback(() => {
    dispatch(setTaskChecked(id));
  }, [id, dispatch]);

  const handleOnSave = useCallback(() => {
    if (currentText !== text) {
      dispatch(setTaskSave({ id, currentText }));
    }
    setEdit(false);
  }, [id, currentText, text, dispatch]);

  const handleOnDelete = useCallback(() => {
    dispatch(setTaskDelete(id));
  }, [id, dispatch]);

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
