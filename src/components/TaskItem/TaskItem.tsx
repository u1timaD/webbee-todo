import { ChangeEvent, useEffect, useState } from 'react';
import Button from '../Button/Button';

type TaskListProps = {
  task: string;
  index: string;
  number: number;
  clickDel: (index: string) => void;
  clickEdit: (currentTask: string, index: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ task, index, number, clickDel, clickEdit }) => {
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
    <li className="todo-task__list task">
      <label htmlFor="task-1" className="task__label">
        <span>{number + 1}</span>
        {edit ? (
          <input
            type="text"
            className="task__edit"
            name="task-1"
            value={currentTask}
            onChange={handleChangeTask}
          />
        ) : (
          <div
            className={`task__block ${isChecked ? 'task__block--checked' : ''}`}
          >
            <input type="checkbox" onChange={handleChangeCheckbox} />
            <span className="task__text">{task}</span>
          </div>
        )}
      </label>
      <div className="task-btn__container">
        {edit ? (
          <>
            <Button name={'Save'} handleClick={handleClickSave} />
            <Button cl={'cancel'} name={'Cancel'} handleClick={handleClickCancel}
            />
          </>
        ) : (
          <>
            <Button cl={'delete'} name={'Delete'} handleClick={handleClickDel} />
            <Button name={'Edit'} handleClick={handleClickEdit} />
          </>
        )}
      </div>
    </li>
  );
};

export default TaskList;
