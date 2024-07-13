import { ChangeEvent, useEffect, useState } from 'react';
import Button from '../Button/Button';
import {
  ButtonWrapperStyled,
  TaskItemStyled,
  TaskLabelStyled,
  TaskTextStyled,
} from './TaskItem.styled';
import Input from '../Input/Input';
import { Checkbox, Typography } from '@mui/material';

type TaskListProps = {
  task: string;
  index: string;
  number: number;
  clickDel: (index: string) => void;
  clickEdit: (currentTask: string, index: string) => void;
};

const TaskList: React.FC<TaskListProps> = ({
  task,
  index,
  number,
  clickDel,
  clickEdit,
}) => {
  const [edit, setEdit] = useState(false);

  const [currentTask, setCurrentTask] = useState(task);
  const [isChecked, setIsChecked] = useState(false);

  const handleChangeTask = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(e.target.value);
  };

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleClickSave = () => {
    clickEdit(currentTask, index);
    setEdit((prev) => !prev);
  };

  const handleClickDel = () => {
    clickDel(index);
    setEdit((prev) => !prev);
    setEdit(false);
  };

  const handleClickCancel = () => {
    setCurrentTask(task);
    setEdit(false);
  };

  const handleClickEdit = () => {
    setEdit(true);
  };

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
            name="task-1"
            value={currentTask}
            onChange={handleChangeTask}
          />
        ) : (
          <TaskTextStyled>
            <Checkbox onChange={handleChangeCheckbox} />
            <Typography
              sx={{
                textDecoration: `${isChecked && 'line-through'}`,
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
            <Button name="save" handleClick={handleClickSave} />
            <Button name="cancel" handleClick={handleClickCancel} />
          </>
        ) : (
          <>
            <Button name="delete" handleClick={handleClickDel} />
            <Button name="edit" handleClick={handleClickEdit} />
          </>
        )}
      </ButtonWrapperStyled>
    </TaskItemStyled>
  );
};

export default TaskList;
