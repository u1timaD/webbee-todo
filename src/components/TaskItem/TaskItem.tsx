import { useEffect, useState } from 'react';
import Button from '../Button/Button';

const TaskList = ({ task, index, number, clickDel, clickEdit }) => {
  const [edit, setEdit] = useState(false);

  const [currentTask, setCurrentTask] = useState(task);
  const [isChecked, setIsChecked] = useState(false);

  const handleChangeTask = (e) => {
    setCurrentTask(e.target.value);
  };

  const handleChangeCheckbox = (e) => {
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
            <Button
              cl={'cancel'}
              name={'Cancel'}
              handleClick={handleClickCancel}
            />
          </>
        ) : (
          <>
            <Button
              cl={'delete'}
              name={'Delete'}
              handleClick={handleClickDel}
            />
            <Button name={'Edit'} handleClick={handleClickEdit} />
          </>
        )}
      </div>
    </li>
  );
};

export default TaskList;
